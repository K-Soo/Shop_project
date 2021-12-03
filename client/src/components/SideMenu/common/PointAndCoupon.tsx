import React from "react";
import styled from "styled-components";
import { PriceComma } from 'utils';
import usePoint from 'hooks/ReactQuery/usePoint';
import { useAppContext } from 'context/AppProvider';

const S = {
  PointAndCoupon: styled.div`
    font-size: 13px;
    margin-bottom: 15px;
    .item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 15px;
      padding-left: 5px;
      &:last-child{
        padding-bottom: 0px;
      }
      &__title{
        color: #333;
      }
      &__value{
        background: #f5f5f5;
        padding: 3px 10px;
        border-radius: 5px;
        color: #323232;
        &::after{
          content: '원';
        }
      }
      .coupon{
        &::after{
          content: '개';
        }
      }
    }
  `,
}

export default function PointAndCoupon() {
  const { totalUsedPoint, totalAccPoint, currentPoint } = usePoint();

  return (
    <S.PointAndCoupon>
      <li className='item'>
        <span className='item__title'>가용 적립금</span>
        <strong className='item__value'>{PriceComma(currentPoint ?? 0)}</strong>
      </li>
      <li className='item'>
        <span className='item__title'>사용된 적립금</span>
        <strong className='item__value'>{PriceComma(totalUsedPoint ?? 0)}</strong>
      </li>
      <li className='item'>
        <span className='item__title'>누적 적립금</span>
        <strong className='item__value'>{PriceComma(totalAccPoint ?? 0)}</strong>
      </li>
      <li className='item'>
        <span className='item__title'>쿠폰</span>
        <strong className='item__value coupon'>{PriceComma(totalAccPoint ?? 0)}</strong>
      </li>
    </S.PointAndCoupon>
  );
}
