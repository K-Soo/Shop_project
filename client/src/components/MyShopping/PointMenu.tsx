import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { PriceComma } from 'utils';
import EmptyItem from 'components/Common/EmptyItem';
interface IPointMenu {
  currentPoint: number;
  totalUsedPoint: number;
  totalAccPoint: number;
  totalAmount:number;
  totalLength:number;
  isSuccess:boolean;
}

const S = {
  PointMenu: styled.div`
  margin: 15px 0;
   border: 5px solid #f5f5f5;
   color: #777;
   padding: 30px 20px;
   font-size: 14px;
   .lists{
     .item{
       padding: 10px 20px;
       border-bottom: 1px solid #f5f5f5;
       display: flex;
       justify-content: space-between;
       &--label{

       }
       &__wrapper{
         display: flex;
         align-items: center;
         justify-content: space-between;
         &--link{
           margin-right: 10px;
           a{
            display: inline-block;
            padding: 5px 10px;
            background: #eaeaea;
            border-radius: 5px;
            &:hover{
              background: #f5f5f5;
            }
           }
         }
         &--value{
           display: flex;
           justify-content: flex-end;
           span{
            margin-left: 3px;
            color: #000;
            background: #f5f5f5;
            padding: 5px 10px;
            border-radius: 5px;
            &::after{
              content: '건'
            }
           }
           strong{
            color: #000;
            background: #f5f5f5;
            padding: 5px 10px;
            border-radius: 5px;
            &::after{
              content: '원'
            }
           }
         }
         &--coupon{
           min-width: 130px;
           display: flex;
           justify-content: flex-end;
           strong{
            color: #000;
            background: #f5f5f5;
            padding: 5px 10px;
            border-radius: 5px;
            &::after{
              content: '개'
            }
           }
         }

       }
     }
   }
  `,
}

export default function PointMenu({ currentPoint, totalUsedPoint, totalAccPoint,totalAmount,totalLength,isSuccess }: IPointMenu) {
  return (
    <S.PointMenu>
      {isSuccess || <EmptyItem text='로그인후 이용가능합니다'/>}
      <ul className='lists'>
        <li className='item'>
          <span className='item--label'>가용 적립금</span>
          <div className='item__wrapper'>
            <div className='item__wrapper--value'>
              <strong >{PriceComma(currentPoint)}</strong>
            </div>
          </div>
        </li>

        <li className='item'>
          <span className='item--label'>사용된 적립금</span>
          <div className='item__wrapper'>
            <span className='item__wrapper--link'>
              <Link href="/users/point"><a>조회</a></Link>
            </span>
            <div className='item__wrapper--value'>
              <strong >{PriceComma(totalUsedPoint)}</strong>
            </div>
          </div>
        </li>

        <li className='item'>
          <span className='item--label'>누적 적립금</span>
          <div className='item__wrapper'>
            <span className='item__wrapper--link'>
            <Link href="/users/point"><a>조회</a></Link>
            </span>
            <div className='item__wrapper--value'>
              <strong >{PriceComma(totalAccPoint)}</strong>
            </div>
          </div>
        </li>

        <li className='item'>
          <span className='item--label'>총주문</span>
          <div className='item__wrapper'>
            <div className='item__wrapper--value'>
              <strong className='total'>{PriceComma(totalAmount)}</strong>
              <span>{totalLength}</span>
            </div>
          </div>
        </li>

        <li className='item'>
          <span className='item--label'>쿠폰</span>
          <div className='item__wrapper'>
            <div className='item__wrapper--coupon'>
              <strong >{'0'}</strong>
            </div>
          </div>
        </li>
      </ul>
    </S.PointMenu>
  );
}
