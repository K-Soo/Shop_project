import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image'
import Title from 'components/style/Title';
import { TColor, IProduct } from 'interfaces/IProduct';
import { PriceComma } from 'utils/PriceComma';
import Icon from 'components/Icon/Icon';
import Radio from 'components/style/Radio';
import Button from 'components/style/Button';
import BasketModal from 'components/ProductDetail/BasketModal';
interface IProductDetail {
  item: IProduct[];
}

const CommonIcon = css`
  padding: 1px 5px;
  font-size: 12px;
  letter-spacing: 1px;
`;

const S = {
  ProductDetail: styled.section`
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
  `,
  Card: styled.article`
    display: flex;
    justify-content: space-between;
    .top{
      flex: 1;
      font-size: 0;
      img{
      width: 400px;
      height: 500px;
    }
    }
    .bottom{
      flex: 1;
    }
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

interface ISelectProduct extends IProduct {
  selectColor: string;
  qty: number;
}

export default function ProductDetail({ item }: IProductDetail) {
  const [showSpec, setShowSpec] = useState<boolean>(false);
  const [selectItems, setSelectItems] = useState<ISelectProduct[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleCount = (e: React.ChangeEvent<HTMLInputElement>, currentQty:ISelectProduct) => {
    const exist = selectItems.find(x => x.selectColor === currentQty.selectColor)
    const { value } = e.target as HTMLInputElement;
    exist.qty = +value;
    
    if (!Number(exist.qty)) return alert('최소 주문수량은 1개 입니다.');
    if(exist.qty === 10) return alert('최대 주문수량은 10개 입니다.');
    
    setSelectItems([...selectItems]);
  };

  const handleAddItem = (e:React.MouseEvent<HTMLInputElement>, currentItem:any ) => {
    const { color } = (e.target as HTMLInputElement).dataset;
    const {
      ...rest
    } = currentItem[0];
    rest.selectColor = color;
    const exist = selectItems.find(x => x.selectColor == rest.selectColor);
    if (exist) {
      return alert('이미 선택하셨습니다.')
    }
    setSelectItems(prev => {
      return [...prev, { ...rest, qty: 1 }];
    })
  };

  const handleRemoveItem = (currentItem:ISelectProduct) => {
    const filterItem = selectItems.filter(d => d.selectColor !== currentItem.selectColor);
    setSelectItems(filterItem);
  };
  const handleAddLocalStorage = () => {
  if(!selectItems.length) return alert('필수 옵션을 선택해주세요.')
    localStorage.setItem('basket',JSON.stringify(selectItems));
    setOpen(true);
  }
  return (
    <S.ProductDetail>
      {item && item.map((d: IProduct) => (
        <S.Card key={d.seq}>
          <div className='top'>
            <Image
              src='https://via.placeholder.com/800'
              alt={d.name}
              width={600}
              height={600}
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
                  <li><del>{d.product_price}원</del></li>
                  <li>{d.consumer_price}원</li>
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
                {d.product_colors.length > 0 && d.product_colors.map((d, i) => (
                  <div key={d.hex_value}>
                    <Radio className='color-item' name='오렌지' dataSetColor="#1111" title='검' onClick={(e) => handleAddItem(e, item)} />
                    <Radio className='color-item' name='오렌지' dataSetColor="#2222" title='빨' onClick={(e) => handleAddItem(e, item)} />
                    <Radio className='color-item' name='오렌지' dataSetColor="#3333" title='노' onClick={(e) => handleAddItem(e, item)} />
                  </div>
                ))}

              </div>
            </S.ProductColorSelect>

            <S.CurrentProducts>
              <ul>
                {selectItems.map((d:ISelectProduct) => (
                  <li key={d.selectColor}>
                    <div className='current-title'>
                      <span className='current-title__name'>{d.name}</span>
                      <b className='current-title__color'>{d.selectColor}</b>
                    </div>
                    <div className='current-quantity'>
                      <input type='number' value={d.qty} name='qtyCount' onChange={(e) => handleCount(e,d)} />
                    </div>
                    <span className='current-price'>{PriceComma(d.consumer_price)}원</span>
                    <button type='button' name='close' onClick={() => handleRemoveItem(d)}>
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
              <em> (1개)</em>
              <strong>60000원</strong>
            </S.TotalPrice>
            <Button>구매하기</Button>
            <S.EtcBox>
              <span className='basket-add' onClick={handleAddLocalStorage}>장바구니 담기</span>
              <span className='wishlist'>관심상품 추가</span>
            </S.EtcBox>
            <BasketModal open={open} onClick={() => setOpen(!open)}/>
          </div>
        </S.Card>
      ))}
    </S.ProductDetail>
  )
};



