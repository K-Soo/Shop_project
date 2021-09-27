import React from "react";
import styled from "styled-components";
import { IOrderDetail } from 'interfaces/IOrder';
import Link from 'next/link';
import Image from 'next/image';
import { PriceComma } from 'utils';

interface IProductInfo {
  items: IOrderDetail[]
}

const S = {
  ProductInfo: styled.div`
    .item{
      &__detail{
        display: flex;
        padding: 10px 10px 0 10px;
        &__image{
          font-size: 0;
          a{
            display: inline-block;
            height: 100%;
          }
        }
        &__info{
          flex: 1;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          .category{
            font-size: 12px;
          }
          .name{
            font-size: 13px;
            padding-bottom: 8px;
          }
          .point{
            font-size: 12px;
            padding-bottom: 2px;
            ::before{
              display: inline-block;
              width: 10px;
              height: 10px;
              content: '적';
              background-color: #B88CC5;
              color: #fff;
              padding: 1px;
              margin-right: 2px;
              font-size: 11px;
              border-radius: 1px;
              height: 9px;
            }
          }
          .price-info{
            font-size: 12px;
            color:  #333;
            b{
              padding-right: 10px;
            }
            b::after{
              content: '원';
              font-weight: normal;
            }
            .amount{
              display: block;
              color: #000;
              font-weight: 600;
              font-size: 13px;
            }
          }
        }
      }
      &__option{
        padding: 0 10px;
        border-top: 1px solid #ececec;
        height: 45px;
        display: flex;
        align-items: center;
        font-size: 12px;
      }
      &__status{
        padding: 0 10px;
        border-top: 1px solid #ececec;
        height: 45px;
        background-color: #f9f9f9;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #912b45;
      }
    }
  `,
}

export default function ProductInfo({ items }: IProductInfo) {
  console.log('items: ', items);
  return (
    <S.ProductInfo>
      {items.map((d) => (
        d.Products.map((d) => (
          <div key={d._id} className='item'>
            <div className='item__detail'>
              <div className='item__detail__image'>
                <Link href={'/product/' + d.product_type + '/' + d.seq}>
                  <a>
                    <Image
                      className='img'
                      src={d.imageUrl[0].url}
                      alt="Picture of the author"
                      width={60}
                      height={80}
                    />
                  </a>
                </Link>
              </div>
              <div className='item__detail__info'>
                <p className='category'>{d.category}</p>
                <strong className='name'>{d.name}</strong>
                <p className='point'>{PriceComma(d.point)}</p>
                <p className='price-info'>
                  <b>{PriceComma(d.consumer_price)}</b>
                  <span>{d.qty}개</span>
                  <span className='amount'>TOTAL: {PriceComma(d.totalConsumerPrice)}원</span>
                </p>
              </div>
            </div>
            <div className='item__option'>
              <p>[ 컬러 : {d.selectColor[0].colorName} ]</p>
            </div>
            <div className='item__status'>
              <strong>결제완료</strong>
            </div>
          </div>
        ))
      ))}
    </S.ProductInfo>
  );
}
