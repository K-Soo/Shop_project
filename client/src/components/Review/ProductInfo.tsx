import React from "react";
import styled from "styled-components";
import { useReviewContext } from 'context/ReviewProvider';
import Link from 'next/link'
import Image from 'next/image'
import Button from 'components/style/Button';
import {PriceComma} from 'utils';

interface IProductInfo {

}

const S = {
  ProductInfo: styled.div`
    border: 3px solid #f5f5f5;
    padding: 10px;
    font-size: 12px;
    .item{
      display: flex;
      .img-box{
      font-size: 0;
    }
    .info{
      flex: 1;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 15px;
      &__desc{
        p:nth-child(1){
          color: #666;
        }
        p:nth-child(2){
          padding-top: 1px;
          font-size: 14px;
        }
        p:nth-child(3){
          padding-top: 5px;
          color: #912b45;
          font-weight: 600;
        } 
      }
      &__button-box{
        display: flex;
        button{
          height: 25px;
          font-size: 12px;
          max-width: 80px
        }
      }
    }
  }
  `,
}

export default function ProductInfo({ }: IProductInfo) {
  const { state: { product } } = useReviewContext();
  console.log('product: ', product);

  return (
    <S.ProductInfo>
      {product.map(d => (
        <div key={d._id} className='item'>
          <div className='img-box'>
            <Link href={d.product_type + "/" + d.seq}>
              <a>
                <div className='img-box'>
                  <Image
                    src={d.imageUrl[0].url}
                    alt="Picture of the author"
                    width={65}
                    height={80}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className='info'>
            <div className='info__desc'>
              <p>{d.category}</p>
              <p>{d.name}</p>
              <p>{PriceComma(d.consumer_price)}원</p>
            </div>
            <div className='info__button-box'>
              <Button white>상품정보</Button>
              <Button white>상품정보</Button>
              <Button white>상품정보</Button>
            </div>
          </div>
        </div>
      ))}
    </S.ProductInfo>
  );
}
