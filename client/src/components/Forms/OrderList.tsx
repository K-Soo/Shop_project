import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import Image from 'next/image';
import Title from 'components/style/Title';
import Input from 'components/style/Input';
import { PriceComma } from 'utils';
import { IBasketItem } from 'interfaces/IProduct';
import { Delete } from 'api';
import { useAppContext } from 'context/AppProvider';
import { useOrderContext } from 'context/OrderProvider';
import { useRouter, NextRouter } from 'next/router';

interface IOrderList {
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
            &::after{
              content: '원';
              padding-left: 2px;
            }
          }
          .product-price{
            font-weight: 600;
            &::after{
              content: '원';
              padding-left: 2px;
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

export default function OrderList({ }: IOrderList) {
  const { state, action } = useAppContext();
  // const Order = useOrderContext();
  const router: NextRouter = useRouter();
  console.log('router: ', router.asPath);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const findOne = state.basket.basketList.find(d => d._id === name);
    action.setCurrentOrderItem(findOne);
    router.push('/order/orderform');
  }

  const handleRemoveItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.target as HTMLButtonElement;
    if (confirm('선택하신 상품을 삭제하시겠습니까?')) {
      try {
        const res = await Delete.deleteBasket(state.userInfo.idx, name);
        action.setLocalItems(res.items);
      } catch (error) {
        console.error('remove-error: ', error);
      }
    }
  };

  return (
    <S.OrderList>
      {state.basket.basketList.length ? (state.basket.basketList.map((d) => (
        <S.Item key={d.selectColor[0].hexValue} asPath={router.asPath}>
          <S.MainContent>
            <div className='icon-box'>
              <Icon name='check' />
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
                    <span>new</span>
                    <span>new</span>
                  </div>
                  <span>배송</span>
                  <p className='consumer-price'><del>{PriceComma(d.product_price)}</del></p>
                  <p className='product-price'>{PriceComma(d.consumer_price)}</p>
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
              <Button login height='25px' width='90px' type='submit' name={d._id} onClick={handleSubmit}>주문하기</Button>
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
            <Button white height='25px' onClick={handleRemoveItem}>삭제</Button>
          </div>
          <Button
            white
            height='25px'
            width='100px'
            onClick={() => router.back()}
          >
            이전 페이지
          </Button>
        </S.OrderButtonBox>
      )}

    </S.OrderList>
  );
}

