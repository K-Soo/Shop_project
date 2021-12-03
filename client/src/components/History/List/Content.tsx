import React from "react";
import styled from "styled-components";
import { ORDER_INFO } from 'constants/history';
import Loading from 'components/Common/Loading';
import EmptyItem from 'components/Common/EmptyItem';
import { PriceComma } from 'utils';
import Image from 'next/image'
import Link from 'next/link';
interface IContent {
  items: any;
  isLoading: boolean;
  isSuccess: boolean;
}

const S = {
  Content: styled.article`
    border: 1px solid #f0f0f0;
    margin-bottom: 15px;
  `,
  LoadingBox: styled.div`
    height: 60px;
  `,
  Header: styled.ul`
    display: flex;
    height: 40px;
    text-align: center;
    font-size: 12px;
    background-color: #f9f9f9;
    li{
    border: solid #f0f0f0;
    border-width: 0 1px 1px 0;
      vertical-align: middle;
      line-height: 40px;
      background: #f9f9f9;
    }
    li:nth-child(1){
      width: 15%;
      min-width: 140px;
    }
    li:nth-child(2){
      min-width: 90px;
    }
    li:nth-child(3){
      flex: 1;
    }
    li:nth-child(4){
      width: 40px;
    }
    li:nth-child(5){
      width: 90px;
    }
    li:nth-child(6){
      width: 70px;
    }
    ${({ theme }) => theme.mobile`
      display: none;
    `}
  `,
  Body: styled.div`
    .item-box{
      display: flex;
      border-bottom: 1px solid #f0f0f0;
      :last-child{
        border-bottom: none;
      }
      ${({ theme }) => theme.mobile`
        flex-direction: column;
      `}
      .order-number{
        width: 15%;
        min-width: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #353535;
        border-right: 1px solid #f0f0f0;
        &__info{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          &--number{
            color: #000;
            font-weight: 500;
            &:hover{
              text-decoration: underline;
            }
          }
        }
        &__detail-link{
          display: none;
        }
        ${({ theme }) => theme.mobile`
          width: 100%;
          height: 40px;
          padding: 0 20px;
          background-color: #555;
          justify-content: space-between;
          color: #fff;
          &__info{
            flex-direction: row;
            &--date{
              padding-right: 10px;
            }
            &--number{
              font-weight: 300;
              color: #fff;
            }
            }
            &__detail-link{
             display: block;
            }
        `}
      }
      .details-box{
        width: 85%;
        font-size: 12px;
        .details{
          flex: 1;
          height: 90px;
          display: flex;
          border-bottom: 1px solid #f0f0f0;
          :last-child{
          border-bottom: none;
          }
          &__img{
            font-size: 0;
          }
          &__option{
            &--category{
              font-size: 10px;
            }
            &--name{
              color: #000;
              :hover{
                text-decoration: underline;
              }
            }
            &--color{
              padding-top: 5px;
              color: #555;
            }
          }
          li{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          li:nth-child(1){
            width: 90px;
          }
          li:nth-child(2){
            flex: 1;
            align-items: flex-start;
            padding-left: 10px;
          }
          li:nth-child(3){
            width: 40px;
          }
          li:nth-child(4){
            width: 90px;
          }
          li:nth-child(5){
            width: 70px;
          }
        }
        ${({ theme }) => theme.mobile`
          width: 100%;
          .details{
            li{

            }
            li:nth-child(1){
              flex-basis: 20%;
              height: 100%;
            }
            li:nth-child(2){
              flex-basis: 35%;
              align-items: flex-start;
            
            }
            li:nth-child(3){
              flex-basis: 10%;
            }
            li:nth-child(4){
              flex-basis: 20%;
            }
            li:nth-child(5){
              flex-basis: 15%;
            }
          }
        `}
      }
    }
  `,

}

export default function Content({ items, isLoading, isSuccess }: IContent) {
  return (
    <S.Content>
      <S.Header>
        {ORDER_INFO.map(d => (
          <li key={d.value}>{d.label}</li>
        ))}
      </S.Header>
      <S.Body>
        {isSuccess && items.data.map((d:any) => (
          <div key={d._id} className='item-box'>
            <div className='order-number'>
              <div className='order-number__info'>
                <p className='order-number__info--date'>{d.createAt}</p>
                <p className='order-number__info--number'>
                  <Link href={`/users/history/details/${items.user}/${d.orderNum}`}>
                    <a>
                      {`[ ${d.orderNum} ]`}
                    </a>
                  </Link>
                </p>
              </div>
              <div className='order-number__detail-link'>
                <Link href={`/users/history/details/${items.user}/${d.orderNum}`}>
                  <a>상세정보</a>
                </Link>
              </div>
            </div>
            <div className='details-box'>
              {d.Products.map((v:any) => (
                <ul className='details' key={v._id}>
                  <li className='details__img'>
                    <Link href={'/product/' + v.product_type + '/' + v.seq}>
                      <a>
                        <Image
                          src={v.imageUrl[0].url}
                          alt={d.name}
                          width={80}
                          height={80}
                        />
                      </a>
                    </Link>
                  </li>
                  <li className='details__option'>
                    <p className='details__option--category'>
                      {v.category}
                    </p>

                    <p className='details__option--name'>
                      <Link href={'/product/' + v.product_type + '/' + v.seq}>
                        <a>
                          {v.name}
                        </a>
                      </Link>
                    </p>
                    <p className='details__option--color'>
                      [색상 : {v.selectColor[0].colorName}]
                    </p>
                  </li>
                  <li>{v.qty}</li>
                  <li>{PriceComma(v.totalConsumerPrice)}원</li>
                  <li>결제완료</li>
                </ul>
              ))}
            </div>
          </div>
        ))}

        {isLoading && (
          <S.LoadingBox>
            <Loading isLoading={true} text='' />
          </S.LoadingBox>
        )}
        {!items.data?.length && <EmptyItem text='주문 내역이 없습니다.'/>}
      </S.Body>
    </S.Content>
  );
}
