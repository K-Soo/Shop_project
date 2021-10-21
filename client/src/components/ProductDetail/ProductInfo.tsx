/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image'
import Title from 'components/style/Title';
import { TColor, IProduct, IBasketItem } from 'interfaces/IProduct';
import Icon from 'components/Icon/Icon';
import Radio from 'components/style/Radio';
import Button from 'components/style/Button';
import CheckBoxColor from 'components/style/CheckBoxColor';
import BasketModal from 'components/ProductDetail/BasketModal';
import { PriceComma, customCookie } from 'utils';
import { Post, Put } from 'api';
import { useBasketContext } from 'context/BasketProvider';
import Cookie from "js-cookie";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';
import useCheckDuplicate from 'hooks/useCheckDuplicate';

interface IProductInfo {
  item: IProduct[];
}
const CommonIcon = css`
  padding: 1px 5px;
  font-size: 12px;
  letter-spacing: 1px;
`;

const S = {
  ProductInfo: styled.article`
    height: 100%;
    margin: 0 auto;
  `,
  Card: styled.article`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .top{
      flex: 1;
      font-size: 0;
      min-width: 300px;
      border: 1px solid #eee;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .bottom{
      flex: 1;
      min-width: 320px;
      padding: 0 20px;
      .order-button{
      }
    }
    ${({ theme }) => theme.mobile`
      flex-direction: column;
      .top{
        width: 100%;
        min-width: 100%;
        margin-bottom: 20px;
      }
      .bottom{
        width: 100%;
        min-width: 100%;
        padding: 0;
      }
    }
  `}
  `,
  IconBox: styled.p`
    margin-bottom:5px;
    i{
      border-radius: 3px;
      &:first-child{
        margin-right: 5px;
      }
    }
    .new-icon{
      ${CommonIcon}
      color: #718FC5;
      background-color: #FFEF36;
    }
    .best-icon{
      ${CommonIcon}
      color: #000;
      background-color: #1B5DF6;
    }
  `,
  TitleBox: styled.div`
    display: flex;
    align-items: center;
    margin-bottom:5px;
    ${Title}{
      font-size: 26px;
    }
    .categoryName{
      margin-left: 10px;
    }
  `,
  PriceBox: styled.div`
    del{
      color: #999;
      margin-right: 10px;
    }
    b{
      font-size: 18px;
    }
  `,
  SummaryDesc: styled.p`
    margin: 10px 0;
    color: #707070;
  `,
  Spec: styled.div<{ showSpec: boolean }>`
    .title{
      cursor: pointer;
      height: 50px;
      border-top: 1px solid #999;
      border-bottom:${props => props.showSpec ? '1px dashed #999' : '1px solid #999'};  
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        font-size: 16px;
        color: #333;
      }
      svg{
        color: #333;
        width: 16px;
        height: 16px;
      }
    }
    .area{
      display: ${props => props.showSpec ? 'block' : 'none'};
      border-bottom: 1px solid #999;
      padding: 10px 0;
      &__info{
        li{ 
          margin-bottom: 5px;
          font-size: 14px;
        }
        li:last-child{
          margin-bottom: 0px;
          }
        li::before{
          display: inline-block;
          width: 100px;
          color: #999;
        }
        li:nth-child(1){
          color: #555;
          &::before{
            content: '- 판매가';
          }
        }
        li:nth-child(2){
          color:#333;
          &::before{
            content: '- 소비자가';
          }
        }
        li:nth-child(3){
          &::before{
            content: '- 상품설명';
          }
        }
      }
    }
  `,
  ColorListShow: styled.p<{ productColors: number }>`
    display: ${props => props.productColors >= 1 ? 'block' : 'none'};
    text-align: left;
    margin-bottom: 5px;
  `,
  ColorIcon: styled.span<{ color: string }>`
    display: inline-block;
    width:10px;
    height:10px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props => props.color ? `${props.color};` : 'none'};
  `,

  ProductColorSelect: styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
    /* padding: 10px 0; */
    .title-box{
      color: #333;
      width: 100px;
      .required-check{
        margin-left: 3px;
      }
    }
    .radio-box{
      flex: 1 70%;
      display: flex;
      flex-wrap: wrap;
      .color-item{
        margin: 3px
      }
    }
  `,
  Guide: styled.div`
    font-size: 12px;
    p{
    font-size: 10px;
    display: flex;
    align-items: center;
    }
    p:first-child{
      margin-bottom: 5px;
    }
    .cnt::after{
      content: '최소주문수량 1개 이상';
      font-size: 10px;
    }
    .box-select::after{
      content: '옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.';
      font-size: 10px;
    }
    svg{
      width: 20px;
    }
  `,
  TotalPrice: styled.div`
  margin: 20px 0;
  display:flex;
  justify-content: space-between;
  align-items: flex-end;
  em{
    font-style: normal;
    font-size: 14px;
    &::before{
      content: '총 상품금액';
      color: #999;
    }
  }
  strong{
    font-size: 24px;
  }
  `,
  CurrentProducts: styled.div`
    max-height: 200px;
    overflow: auto;
    li{
      height: 65px;
      margin-bottom: 5px;
      background-color: #F9F9F9;
      display: flex;
      font-size: 13px;
      align-items: center;
      padding: 10px 15px;
      justify-content: space-between;
      .current-title{
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        &__name{
          color: #999;
          padding-bottom: 2px;
        }
      }
      .current-quantity{
        height: 100%;
        flex-basis: 20%;
        input{
          appearance: none;
          width: 65px;
          height: 100%;
          padding-left: 15px;
          border: 1px solid #dee2e6;
          margin: 0
     
        }
        input[type=number]::-webkit-inner-spin-button {
          opacity: 1;
          position: absolute;
          top: 0;
          right: 0;
          height: 110%;
          cursor: pointer;
        }
      }
      button{
        all: unset;
        height: 100%;
          svg{
            color: #000;
            width: 16px;
            height: 16px;
          }
      }
    }
  `,
  EtcBox: styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    span{
      border-bottom: 2px solid #333;
      cursor: pointer;
      &:hover{
        color: #707070;
      }
    }
    .basket-add{
      &::before{
        content: '+';
        margin-right: 5px;
      }
    }
    .wishlist{
      margin-left: 15px;
      &::before{
        content: '+';
        margin-right: 5px;
      }
    }
  `,
}

export default function ProductInfo({ item }: IProductInfo) {
  const [showSpec, setShowSpec] = useState<boolean>(false);
  const [selectItems, setSelectItems] = useState<IBasketItem[]>([]);
  const [interestProduct, setInterestProduct] = useState<string>('');
  const { action, state } = useBasketContext();
  const router = useRouter();
  const App = useAppContext();
  const [duplicate] = useCheckDuplicate(App.state.basket.basketList, selectItems);
  const [nonMemDuplicate] = useCheckDuplicate(App.state.basket.nonMemberBasket, selectItems);

  useEffect(() => {
    setInterestProduct(item[0].name);
  }, [item]);

  const handleAddInterestProduct = async () => {
    try {
      if (App.state.userInfo.userId) {
        const res = await Put.updateInterestProduct({ userId: App.state.userInfo.userId, name: interestProduct });
        if (res.success) return alert('관심상품으로 등록되었습니다.');
        if (res.duplicate) return alert('이미 등록되었습니다.');
      } else {
        alert('로그인후 이용가능합니다.');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleAddToBasket = async () => {
    if (!selectItems.length) return alert('필수 옵션을 선택해주세요.');
    if (duplicate || nonMemDuplicate) {
      alert("이미동일한 상품이 장바구니에 있습니다.\n장바구니에서 확인 후 다시 추가해주세요.");
      setSelectItems([]);
      return action.setOpenModal();
    } else {
      if (App.state.userInfo.userId) {
        try {
          const res = await Put.updateBasket({ userId: App.state.userInfo.userId, items: selectItems });
          App.action.setLocalItems(res.items);
          return action.setOpenModal();
        } catch (error) {
          console.log('error: ', error);
        }
      } else {
        App.action.setNonMemberBasketPush(selectItems);
        return action.setOpenModal();
      }
    }
  };

  const handleSelectItem = (e: React.ChangeEvent<HTMLInputElement>, currentItem: IProduct[]) => {
    const { value } = e.target as HTMLInputElement;
    const { colorName } = (e.target as HTMLInputElement).dataset;
    const { ...rest }: IBasketItem = currentItem[0];

    rest.date = new Date().toLocaleString();
    rest.selectColor = [{ colorName: colorName, hexValue: value }];
    rest.point = (+currentItem[0].consumer_price * 0.1);
    rest.totalConsumerPrice = currentItem[0].consumer_price;
    rest.totalProductPrice = currentItem[0].product_price;
    delete rest._id;
    const exist = selectItems.filter(x => x.selectColor[0].colorName == rest.selectColor[0].colorName);
    if (exist.length) {
      return alert('이미 선택하셨습니다. 아래에서 삭제후 다시 이용해주세요');
    } else {
      setSelectItems(prev => {
        return [...prev, { ...rest, qty: 1 }];
      });
    }
  };

  const ProductAllPriceCalc = useMemo(() => {
    return selectItems.reduce((acc: number, cur: IBasketItem) => {
      const result = (cur.qty * Number(cur.consumer_price)) + acc;
      return result;
    }, 0);
  }, [selectItems]);

  const handleCount = (e: React.ChangeEvent<HTMLInputElement>, targetItem: IBasketItem) => {
    const cnt = +e.target.value;
    if (!cnt) return alert('최소 주문수량은 1개 입니다.');
    if (cnt > 10) return alert('최대 주문수량은 10개 입니다.');
    targetItem.qty = cnt;
    targetItem.totalConsumerPrice = String(+targetItem.consumer_price * cnt);
    targetItem.totalProductPrice = String(+targetItem.product_price * cnt);
    setSelectItems([...selectItems]);
  };

  const TotalCnt = useMemo(() => {
    const cnt = selectItems.reduce((pre, cur) => {
      return pre + cur.qty;
    }, 0);
    return cnt;
  }, [selectItems]);

  const handleRemoveItem = (currentItem: IBasketItem) => {
    const filterItem = selectItems.filter(d => d.selectColor !== currentItem.selectColor);
    setSelectItems(filterItem);
  };

  const handleOrderToProduct = () => {
    if (!selectItems.length) return alert('필수 옵션을 선택해주세요.');
    if (duplicate) {
      alert("이미동일한 상품이 장바구니에 있습니다.\n장바구니에서 확인 후 다시 추가해주세요.");
      return action.setOpenModal();
    } else {
      action.setCurrentOrder(selectItems);
      router.push('/order/orderform');
    }
  };

  return (
    <S.ProductInfo>
      {item && item.map((d: IProduct) => (
        <S.Card key={d.seq}>
          <div className='top'>
            <img
              src={d.imageUrl[0].url}
              alt={d.name}
            />
          </div>

          <div className='bottom'>
            <S.ColorListShow productColors={d.product_colors.length}>
              {d.product_colors?.map((d: TColor) => (
                <S.ColorIcon className='color-icon' key={d.hex_value} color={d.hex_value} />
              ))}
            </S.ColorListShow>
            <S.IconBox >
              {d.new_product && <i className='new-icon' >new</i>}
              {d.best_product && <i className='best-icon' >best</i>}
            </S.IconBox>

            <S.TitleBox>
              <Title level={3} textAlign="left">
                {d.name}
              </Title>
              <span className='categoryName'>{d.category}</span>
            </S.TitleBox>

            <S.PriceBox>
              <span>
                <del>{PriceComma(d.product_price)}원</del>
              </span>
              <b>{PriceComma(d.consumer_price)}원</b>
            </S.PriceBox>

            <S.SummaryDesc >
              {d.summary_description}
            </S.SummaryDesc>

            <S.Spec showSpec={showSpec}>
              <div className='title' onClick={() => setShowSpec(!showSpec)} >
                <span>
                  상품정보
                </span>
                {showSpec ? <Icon name='minus' /> : <Icon name='plus' />}
              </div>
              <div className='area'>
                <ul className='area__info'>
                  <li><del>{PriceComma(d.product_price)}원</del></li>
                  <li>{PriceComma(d.consumer_price)}원</li>
                  <li>{d.description}</li>
                </ul>
              </div>
            </S.Spec>

            <S.ProductColorSelect>
              <div className='title-box'>
                <span>색상</span>
                <strong className='required-check'>[필수]</strong>
              </div>
              <div className='radio-box'>
                {d.product_colors.length && d.product_colors.map((d, i) => (
                  <div key={d.hex_value}>
                    <CheckBoxColor
                      className='color-item'
                      name='checkbox-color'
                      checked={(selectItems as any).find((f: any) => f.selectColor[0].hexValue === d.hex_value) || false}
                      dataColorName={d.color_name}
                      value={d.hex_value}
                      title={d.color_name}
                      onChange={(e) => handleSelectItem(e, item)} />
                  </div>
                ))}
              </div>
            </S.ProductColorSelect>

            <S.CurrentProducts>
              <ul>
                {selectItems.map((d: IBasketItem) => (
                  <li key={d.selectColor[0].hexValue}>
                    <div className='current-title'>
                      <span className='current-title__name'>{d.name}</span>
                      <b className='current-title__color'>{d.selectColor[0].colorName}</b>
                    </div>
                    <div className='current-quantity'>
                      <input type='number' value={d.qty} name='qtyCount' onChange={(e) => handleCount(e, d)} />
                    </div>
                    <span className='current-price'>{PriceComma(Number(d.consumer_price))}원</span>
                    <button name='close' onClick={() => handleRemoveItem(d)}>
                      <Icon name='closeSmall' />
                    </button>
                  </li>
                ))}
              </ul>
            </S.CurrentProducts>

            <S.Guide>
              <p className='cnt'><Icon name='info' /></p>
              <p className='box-select'><Icon name='info' /></p>
            </S.Guide>

            <S.TotalPrice>
              <em> {TotalCnt}개</em>
              <strong>{PriceComma(ProductAllPriceCalc)}원</strong>
            </S.TotalPrice>
            <Button black className='order-button' onClick={handleOrderToProduct}>
              구매하기
            </Button>
            <S.EtcBox>
              <span className='basket-add' onClick={handleAddToBasket}>장바구니 담기</span>
              <span className='wishlist' onClick={handleAddInterestProduct}>관심상품 추가</span>
            </S.EtcBox>
            <BasketModal />
          </div>
        </S.Card>
      ))}
    </S.ProductInfo>
  );
}
