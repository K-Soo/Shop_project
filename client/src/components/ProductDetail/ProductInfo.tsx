/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/style/Title';
import { TColor, IProduct, IBasketItem } from 'interfaces/IProduct';
import Icon from 'components/Icon/Icon';
import Radio from 'components/style/Radio';
import Button from 'components/style/Button';
import CheckBoxColor from 'components/style/CheckBoxColor';
import BasketModal from 'components/ProductDetail/BasketModal';
import { PriceComma } from 'utils';
import { Put } from 'api';
import { useBasketContext } from 'context/BasketProvider';
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';
import useCheckDuplicate from 'hooks/useCheckDuplicate';
import EmptyItem from 'components/Common/EmptyItem';
import TextIcon from 'components/Common/TextIcon';
import PAGE from 'constants/path';
import { useSnackbar } from 'notistack';
import { useOrderContext } from 'context/OrderProvider';
interface IProductInfo {
  item: IProduct[];
}

const S = {
  ProductInfo: styled.article`
    height: 100%;
    margin: 0 auto;
  `,
  Card: styled.article<{ isSoldOut: boolean }>`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .top{
      flex: 1;
      position: relative;
      font-size: 0;
      min-width: 300px;
      border: 1px solid #eee;
      max-height: 480px;
      .sold-out{
        position: absolute;
        width: 100%;
        text-align: center;
        height: 100%;
        background-color: rgb(255,255,255,0.6);
        display: ${props => props.isSoldOut ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        p{
          color: #666;
          font-size: 24px;
        }
      }
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
    display: flex;
  `,
  TitleBox: styled.div`
    margin-bottom:5px;
    .title-wrapper{
      display: flex;
      align-items: center;
      ${Title}{
        font-size: 20px;
      }
    }
    .categoryName{
      font-size: 14px;
      color: #353535;
      display: block;
      margin-top: 10px;
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
    .title-box{
      color: #333;
      width: 80px;
      font-size: 14px;
      .required-check{
        margin-left: 3px;
      }
    }
    .radio-box{
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      .color-item{
        /* margin: 3px; */
      }
    }
  `,
  Guide: styled.div`
    font-size: 12px;
    margin-top: 10px;
    p{
      font-size: 10px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
    p:last-child{
      margin-bottom: 0px;
    }
    .qty-name{
      font-size: 13px;
      color: #000;
      &--qty{
        padding-left: 3px;
        color: #8c4153;
      }
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
    .selected-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 65px;
      margin-top: 5px;
      border: 1px solid #e5e5e5;
      &:first-child{
      margin-top: 0px;
      }
      background-color: #F9F9F9;
      font-size: 13px;
      padding: 10px 15px;
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
      .current-price{
        white-space: nowrap;
      }
      button{
        all: unset;
        height: auto;
        cursor: pointer;
        font-size: 0;
        border-radius: 50%;
        padding: 5px;
        border : 1px solid transparent;
        &:hover{
          border: 1px solid #e5e5e5;
          background: #f5f5f5;
        }
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
      color: #444;
      font-size: 16px;
      cursor: pointer;
      &:hover{
        color: #707070;
      }
      ${({ theme }) => theme.mobile`
        font-size: 14px;
      `}
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
  SoldOut: styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
  `,
}

export default function ProductInfo({ item }: IProductInfo) {
  const [showSpec, setShowSpec] = useState<boolean>(false);
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);
  const [selectItems, setSelectItems] = useState<IBasketItem[]>([]);
  const [interestProduct, setInterestProduct] = useState<string>('');
  const { action } = useBasketContext();
  const router = useRouter();
  const App = useAppContext();
  const Order = useOrderContext();
  const [duplicate] = useCheckDuplicate(App.state.basket.basketList, selectItems);
  const [nonMemDuplicate] = useCheckDuplicate(App.state.basket.nonMemberBasket, selectItems);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    setInterestProduct(item[0].name);
    if (Number(item[0].qty) <= 0) setIsSoldOut(true);
  }, [item]);

  const handleAddInterestProduct = async () => {
    try {
      if (App.state.userInfo.userId) {
        const res = await Put.updateInterestProduct({ userId: App.state.userInfo.userId, name: interestProduct });
        if (res.duplicate) return alert('이미 등록되었습니다.');
        if (res.success) return alert('관심상품으로 등록되었습니다.');
      } else {
        alert('로그인후 이용가능합니다.');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleOrderToProduct = async () => {
    // 구매하기
    if (!selectItems.length) {
      return enqueueSnackbar('필수 옵션을 선택해주세요.', { variant: 'info' });
    }
    if (duplicate || nonMemDuplicate) {
      alert("이미동일한 상품이 장바구니에 있습니다.\n장바구니에서 확인 후 다시 추가해주세요.");
      return App.action.setBasketModal();
    }
    if (App.state.userInfo.userId) {
      try {
        const res = await Put.updateBasket({ userId: App.state.userInfo.userId, items: selectItems });
        App.action.setLocalItems(res.items);
        const resItems = res.items as IBasketItem[]
        const result = resItems.filter(({ name: localName, selectColor: color1 }) => selectItems.some(({ name: selectName, selectColor: color2 }) => color2[0].colorName == color1[0].colorName && localName === selectName));
        Order.action.setEntireProducts(result);
        router.push(PAGE.ORDER.path);
      } catch (error) {
        console.error('error: ', error);
        return enqueueSnackbar('잠시후 다시시도해주세요.', { variant: 'error' });
      }
    } else {
      Order.action.setEntireProducts(selectItems);
      if (!App.state.status.guest) {
        router.push({
          pathname: '/auth/login',
          query: { type: 'order' },
        });
      } else {
        router.push(PAGE.ORDER.path);
      }
    }
  };

  const handleAddToBasket = async () => {
    // 장바구니 추가
    if (!selectItems.length) {
      return enqueueSnackbar('필수 옵션을 선택해주세요.', { variant: 'info' });
    }
    if (duplicate || nonMemDuplicate) {
      alert("이미동일한 상품이 장바구니에 있습니다.\n장바구니에서 확인 후 다시 추가해주세요.");
      setSelectItems([]);
      return App.action.setBasketModal();
    } else {
      if (App.state.userInfo.userId) {
        try {
          const res = await Put.updateBasket({ userId: App.state.userInfo.userId, items: selectItems });
          App.action.setLocalItems(res.items);
          return App.action.setBasketModal();
        } catch (error) {
          console.error('error: ', error);
        }
      } else {
        App.action.setNonMemberBasketPush(selectItems);
        return App.action.setBasketModal();
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
    if (cnt > item[0].qty) return alert(`최대 주문수량은 ${item[0].qty}개 입니다.`);
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



  return (
    <S.ProductInfo>
      {item && item.map((d: IProduct) => (
        <S.Card key={d.seq} isSoldOut={isSoldOut}>
          <div className='top'>
            <div className='sold-out'>
              <p>SOLD OUT</p>
            </div>
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


            <S.TitleBox>
              <span className='categoryName'>{d.category}</span>
              <div className='title-wrapper'>
                <Title level={3} textAlign="left">
                  {d.name}
                </Title>
                <S.IconBox >
                  {d.new_product && <TextIcon text='new' height="17px" margin='0 3px 0 0' />}
                  {d.best_product && <TextIcon height="17px" text='best' />}
                </S.IconBox>
              </div>

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

            {d.qty > 0 ? (
              <>
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
                      <li key={d.selectColor[0].hexValue} className='selected-item'>
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
                  <p className='qty-name'><Icon name='info' />남은수량<strong className='qty-name--qty'>{d.qty}개</strong></p>
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
              </>
            ) : (
              <S.SoldOut>
                <EmptyItem text={d.qty === 0 ? '품절된 상품입니다.' : '판매종료된 상품입니다.'} />
              </S.SoldOut>
            )}
            <BasketModal />
          </div>
        </S.Card>
      ))}
    </S.ProductInfo>
  );
}
