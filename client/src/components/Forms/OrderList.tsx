import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import Image from 'next/image';
import Title from 'components/style/Title';
import Input from 'components/style/Input';
import { PriceComma } from 'utils';

interface IOrderList {
  caption?: string;
}

const S = {
  OrderList: styled.div`
    border: 1px solid red;
  `,
  Item: styled.div`
    border-bottom: 1px dashed #ccc;
    :last-child{
      border-bottom: none;
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
  ButtonBox: styled.div`
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    .button-wrapper{
      display: flex;
      button:first-child{
        margin-right: 5px;
      }
      
    }
  `,


}

const Mock = [
  {
    best_product: true,
    new_product: true,
    product_type: '목걸이',
    category: '이니셜목걸이',
    name: '메모리 오벌라운드 로켓 목걸이',
    consumer_price: 200000,
    product_price: 250000,
    summary_description: '누구나 가지고싶은 목걸이',
    description: '예쁜 추억을 간직하세요',
    product_colors: [
      { hex_value: '#000000', color_name: '검정' }
    ],
    imageUrl: [
      { url: "https://shop-product.s3.ap-northeast-2.amazonaws.com/1630164685041_%E1%84%86%E1%85%A6%E1%84%86%E1%85%A9%E1%84%85%E1%85%B5%20%E1%84%8B%E1%85%A9%E1%84%87%E1%85%A5%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%B3%20%E1%84%85%E1%85%A9%E1%84%8F%E1%85%A6%E1%86%BA%20%E1%84%86%E1%85%A9%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%B5.jpg" }
    ],
    seq: 3,
    selectColor: { colorName: '검정', hexValue: '#000000' },
    totalConsumerPrice: "200000",
    totalProductPrice: "250000",
    qty: 3,
  },
  {
    best_product: true,
    new_product: true,
    product_type: '목걸이',
    category: '이니셜목걸이',
    name: '메모리 오벌라운드 로켓 목걸이',
    consumer_price: 200000,
    product_price: 250000,
    summary_description: '누구나 가지고싶은 목걸이',
    description: '예쁜 추억을 간직하세요',
    product_colors: [
      { hex_value: '#000000', color_name: '검정' }
    ],
    imageUrl: [
      { url: "https://shop-product.s3.ap-northeast-2.amazonaws.com/1630164685041_%E1%84%86%E1%85%A6%E1%84%86%E1%85%A9%E1%84%85%E1%85%B5%20%E1%84%8B%E1%85%A9%E1%84%87%E1%85%A5%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%B3%20%E1%84%85%E1%85%A9%E1%84%8F%E1%85%A6%E1%86%BA%20%E1%84%86%E1%85%A9%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%B5.jpg" }
    ],
    seq: 2,
    selectColor: { colorName: '검정', hexValue: '#000000' },
    totalConsumerPrice: "200000",
    totalProductPrice: "250000",
    qty: 3,
  }
]

export default function OrderList({ caption }: IOrderList) {
  return (
    <S.OrderList>
      {Mock.map((d) => (
        <S.Item key={d.seq}>
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
                  <p className='consumer-price'><del>{PriceComma(d.consumer_price)}</del></p>
                  <p className='product-price'>{PriceComma(d.product_price)}</p>
                </div>
                <div className='product-info__right--count'>
                  <Input type="number" height='30' width='70'/>
                  <Button white height='30px' width='50px'>변경</Button>
                </div>
              </div>
            </div>

          </S.MainContent>
          <S.Option>
            <span>
              [ 옵션 : {d.selectColor.colorName} ]
            </span>
          </S.Option>

          <S.Price>
            <strong>
              합계 : {PriceComma(d.totalProductPrice)}원
            </strong>
          </S.Price>

          <S.ButtonBox>
            <div className='button-wrapper'>
              <Button white height='25px'>삭제</Button>
              <Button white height='25px'>관심상품</Button>
            </div>
            <Button login height='25px' width='90px'>주문하기</Button>
          </S.ButtonBox>
        </S.Item>
      ))}
    </S.OrderList>
  );
}
