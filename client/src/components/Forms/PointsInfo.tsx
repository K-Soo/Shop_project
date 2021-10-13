import React from "react";
import styled from "styled-components";
import Input from 'components/style/Input';
import Button from 'components/style/Button';
import { PriceComma,onlyNum } from 'utils';
import { useOrderContext } from 'context/OrderProvider';

const S = {
  PointsInfo: styled.div`
   border: solid #f0f0f0;
   border-width: 0 1px 1px 1px;
   ul{
    border: solid #f0f0f0;
    border-width: 0 0 1px 0;
   }
   ul:last-child{
     border: none;
   }
  `,
  Lists: styled.ul`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    li{
      padding: 10px;
      height: 45px; 
    }
    .title{
      width: 25%;
      display: flex;
      align-items: center;
      border: solid #f0f0f0;
      border-width: 0 1px 0 0;
      background-color: #fbfafa;
      &__points{
        margin-right: 5px;
      }
      &__price{
        color: #777;
        strong{
          font-weight: normal;
          color: #508bed;
        }
      }
    }
    .desc{
      display: flex;
      align-items: center;
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }
      input{
        height: 100%;
        font-size: 14px;

      }
      button{
        height: 100%;
        font-size: 12px;
      }
    }
    ${({ theme }) => theme.mobile`
      flex-direction: column;
      font-size: 13px;
      .title{
        width: 100%;
        border: none;
      }
      .desc{
        width: 100%;
      }
    `}
  `,
}

export default function PointsInfo() {
  const {state,action} = useOrderContext();
  return (
    <S.PointsInfo>
      <S.Lists >
        <li className='title'>
          <span>적립예정금액</span>
        </li> 
        <li className='desc'>
        <span>{PriceComma(state.orderForm.pointInfo.estimatedPoint)}원</span>
        </li>
      </S.Lists>

      <S.Lists >
        <li className='title'>
          총 부가결제금액
        </li>
        <li className='desc'>
        <span>{PriceComma(state.orderForm.pointInfo.totalUsed || 0)}원</span>
        </li>
      </S.Lists>
      
      <S.Lists >
        <li className='title'>
          <span className='title__points'>적립금</span>
          <span className='title__price'>(사용가능 : <strong>{PriceComma(state.currentPoint)}원</strong>)</span>
        </li>
        <li className='desc'>
          <Input 
            height='35' 
            maxLength={String(state.currentPoint).length}
            name='orderForm.pointInfo.totalUsed' 
            onFocus={action.setFocusPoint} 
            onBlur={action.setOnBlurPoint} 
            onChange={e => onlyNum(e, action.setFormData)} 
            value={state.orderForm.pointInfo.totalUsed}
          />
          <Button white width='50' margin='0 0 0 15px' onClick={action.setTotalPointUsed}>전액사용</Button>
        </li>
      </S.Lists>

    </S.PointsInfo>
  );
}
