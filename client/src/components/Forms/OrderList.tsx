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
import TextIcon from 'components/Common/TextIcon';
import Link from 'next/link';


interface IOrderList {
  handleRemoveItem?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  item: IBasketItem[]
  handleRouterBack?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
        font-size: 0;
        a{
          /* border: 1px solid #000; */
          display: inline-block;
          height: 100%;
        }
        .img{
        /* height: 100%;
        border: 1px solid red;
        background-color: #000;
        border: 1px solid red; */
        }
      }
      &__right{
        flex: 1;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        &--desc{
          flex: 1;
          width: 100%;
          align-items: center;
          .title{
            display: flex;
            align-items: flex-start;
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
          input[type=number]::-webkit-inner-spin-button {
            opacity: 1;
            position: absolute;
            top: 0;
            right: 0;
            height: 110%;
            cursor: pointer;
          }
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
  handleRouterBack,
  handleCheckbox,
  handleSelectProductRemove,
  item
}: IOrderList) {
  const { action,state } = useAppContext();
  const router: NextRouter = useRouter();
  const {userId} = state.userInfo;
  
  return (
    <S.OrderList>
      {item.length ? (item.map((d) => (
        <S.Item key={userId ? d._id : d.date} asPath={router.asPath}>
          <S.MainContent>
            <div className='icon-box'>
              <CheckBox name='checkItem' value={userId ?  d._id : d.date} onChange={handleCheckbox} />
            </div>
            <div className='product-info'>
              <div className='product-info__left'>
                <Link href={'/product/' + d.product_type + '/' + d.seq}>
                  <a>
                    <Image
                      className='img'
                      src={d.imageUrl[0].url}
                      alt="Picture of the author"
                      width={100}
                      height={116}
                    />
                  </a>
                </Link>

              </div>
              <div className='product-info__right'>
                <div className='product-info__right--desc'>
                  <div className='product-info__right--desc title'>
                    <Link href={'/product/' + d.product_type + '/' + d.seq}>
                      <a>
                        <Title level={6} size='14' >{d.name}</Title>
                      </a>
                    </Link>
                    {d.best_product && <TextIcon text='best' margin='0 0 0 5px' />}
                    {d.new_product && <TextIcon text='new' margin='0 0 0 5px' />}
                  </div>
                  <p className='point-price'>{PriceComma(d.point)}</p>
                  <p className='product-price'><del>{PriceComma(d.product_price)}</del></p>
                  <p className='consumer-price'>{PriceComma(d.consumer_price)}</p>
                </div>
                {router.asPath === "/order/basket" && (
                  <div className='product-info__right--count'>
                    <Input
                      type="number"
                      height='30'
                      width='70'
                      margin='0 15px 0 0'
                      value={d.qty}
                      onChange={action.setChangeQty}
                      name={userId ?  d._id : d.date}
                    />
                    <Button white height='30px' width='50px' name={d._id} >변경</Button>
                  </div>
                )}
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
                <Button white height='25px' name={userId ? d._id : d.date} onClick={handleRemoveItem}>삭제</Button>
                <Button white height='25px'>관심상품</Button>
              </div>
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

