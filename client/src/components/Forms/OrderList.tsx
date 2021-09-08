import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from 'next/image';
import { useRouter, NextRouter } from 'next/router';
import { IBasketItem } from 'interfaces/IProduct';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import Title from 'components/style/Title';
import Input from 'components/style/Input';
import { useAppContext } from 'context/AppProvider';
import { useOrderContext } from 'context/OrderProvider';
import { PriceComma } from 'utils';
import CheckBox from 'components/style/CheckBox';

interface IOrderList {
  handleRemoveItem?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleOrderToOneProduct?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  item: IBasketItem[]
  handleRouterBack?:  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCheckbox?: React.ChangeEventHandler<HTMLInputElement>;
  handleSelectProductRemove?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const S = {
  OrderList: styled.div`
  `,
  EmptyBasket: styled.div`
    padding: 20px 0;
    align-items: center;
    .text{
      margin-top: 20px;
      color: #999;
      text-align: center;
    }
    .icon{
      text-align: center;
      font-size: 0;
      svg{
        color: #333;
        width: 30px;
        height: 30px;
        font-size: 0;
      }
    }
  `,
  Item: styled.div<{ asPath: string }>`
    border-bottom: 1px dashed #ccc;
    &:last-child{
      border-bottom: ${props => props.asPath === '/order/basket' ? 'none' : 'none'}
    }
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0 10px;
    font-size: 12px;
    button{
      font-size: 12px;
    }
  `,
  MainContent: styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    .icon-box{
      display: flex;
      align-items: center;
      height: 40px;
      justify-content: flex-end;
    }
    .product-info{
      display: flex;
      &__left{
        margin-right: 10px;
        /* border: 1px solid red; */
        img{

        }
        .img{
          height: 100%;
        border: 1px solid red;
        background-color: #000;
        }
      }
      &__right{
        flex: 1;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        /* border: 1px solid red; */
        &--desc{
          flex: 1;
          width: 100%;
          .title{
            display: flex;
            align-items: center;
          }
          .consumer-price{
            font-size: 14px;
            font-weight: 600;
            &::after{
              content: '원';
            }
          }
          .product-price{
            color: #333;
            &::after{
              content: '원';
            }
          }
          .point-price{
            font-weight: 400;
            color: #888;
            margin-bottom: 3px;
            &::before{
              content: '적';
              display: inline-block;
              background-color: #B88CC5;
              color: #fff;
              padding: 1px;
              margin-right: 2px;
              font-size: 11px;
              border-radius: 1px;
              height: 9px;
            }
            &::after{
              content: '원';
            }
          }
        }
        &--count{
          height: 40px;
          width: 100%;
          display: flex;
          align-items: center;
          border-top: 1px solid #f0f0f0;
        }
      }

    }
  `,
  Option: styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    border-top: 1px solid #f0f0f0;
  `,

  Price: styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    border-top: 1px solid #f0f0f0;
  `,
  BasketButtonBox: styled.div`
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    .button-wrapper{
      display: flex;
      align-items: center;
    }
  `,
  OrderButtonBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    button{
      font-size: 14px;
    }
    div{
    display: flex;
    align-items: center;
      p{
        width: 100%;
        white-space: nowrap;
        color: #353535;
        margin-right: 5px;
        font-size: 14px;
      }
    }
      button:first-child{
        margin-right: 5px;
      }
  `,
}

export default function OrderList({ 
  handleRemoveItem, 
  handleOrderToOneProduct, 
  handleRouterBack,
  handleCheckbox,
  handleSelectProductRemove,
  item 
}: IOrderList) {
  const { action } = useAppContext();
  const router: NextRouter = useRouter();

  return (
    <S.OrderList>
      {item.length ? (item.map((d) => (
        <S.Item key={d._id} asPath={router.asPath}>
          <S.MainContent>
            <div className='icon-box'>
              <CheckBox name='check' value={d._id} onChange={handleCheckbox}/>
            </div>
            <div className='product-info'>
              <div className='product-info__left'>
                <Image
                  className='img'
                  src={d.imageUrl[0].url}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </div>
              <div className='product-info__right'>
                <div className='product-info__right--desc'>
                  <div className='product-info__right--desc title'>
                    <Title level={6} size='14' className='title'>{d.name}</Title>
                    {d.best_product && <span>BEST</span>}
                    {d.new_product && <span>NEW</span>}
                  </div>
                  <p className='point-price'>{PriceComma(d.point)}</p>
                  <p className='product-price'><del>{PriceComma(d.product_price)}</del></p>
                  <p className='consumer-price'>{PriceComma(d.consumer_price)}</p>
                </div>
                <div className='product-info__right--count'>
                  <Input type="number" height='30' width='70' value={d.qty} onChange={action.setChangeQty} name={d._id} />
                  <Button white height='30px' width='50px' name={d._id} >변경</Button>
                </div>
              </div>
            </div>

          </S.MainContent>
          <S.Option>
            <span>
              [ 옵션 : {d.selectColor[0].colorName} ]
            </span>
          </S.Option>

          <S.Price>
            <strong>
              합계 : {PriceComma(d.totalConsumerPrice)}원
            </strong>
          </S.Price>

          {router.asPath === "/order/basket" && (
            <S.BasketButtonBox>
              <div className='button-wrapper'>
                <Button white height='25px' name={d._id} onClick={handleRemoveItem}>삭제</Button>
                <Button white height='25px'>관심상품</Button>
              </div>
              <Button
                login
                height='25px'
                width='90px'
                name={d._id}
                onClick={handleOrderToOneProduct}
              >
                주문하기
              </Button>
            </S.BasketButtonBox>
          )}
        </S.Item>
      ))) : (
        <S.EmptyBasket>
          <p className='icon'>
            <Icon name='cart' />
          </p>
          <p className='text'>장바구니가 비어있습니다.</p>
        </S.EmptyBasket>
      )}

      {router.asPath === "/order/orderform" && (
        <S.OrderButtonBox>
          <div>
            <p>선택상품을</p>
            <Button white height='25px' onClick={handleSelectProductRemove}>삭제</Button>
          </div>
          <Button
            white
            height='25px'
            width='100px'
            onClick={handleRouterBack}
          >
            이전 페이지
          </Button>
        </S.OrderButtonBox>
      )}

    </S.OrderList>
  );
}

