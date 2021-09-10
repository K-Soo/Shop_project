import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import {PriceComma} from 'utils';
interface IFinalAmount {
  handleSelectedProduct?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleEntireProducts?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  totalPrice: number;
  paymentPrice: number;

}

const S = {
  FinalAmount: styled.div`
    /* margin: 30px 0; */
    table{
      width: 100%;
      text-align: center;
      border-collapse: collapse;
      caption{
        display: none;
      }
      th,td {
        vertical-align: middle;
        border: 1px solid #f0f0f0;
      }
      thead{
        th{
          background-color: #F9F9F9;
          padding: 14px 0;
          font-size: 13px;
          font-weight: 400;
        }
      }
      tbody{
        td{
          font-size: 20px;
          padding: 30px 0;
          color: #353535;
          b{
            &::after{
              content: '원';
              font-size: 12px;
              color: #353535;
              font-weight:600;
              vertical-align: middle;
              padding-left: 1px;
            }
          }
        }
        strong{
          color: #8c4153;
          &::after{
            content: '원';
            font-size: 12px;
            color: #8c4153;
            font-weight:600;
            vertical-align: middle;
            padding-left: 1px;
          }
        }
      }
      ${({ theme }) => theme.mobile`
      thead{
        th{
          padding: 14px 0;
          font-size: 12px;
          font-weight: 400;
        }
      }
      tbody{
        td{
          font-size: 12px;
        }
      }
      `}
    }
  `,
  BasketButtons: styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    .button-wrapper{
      display: flex;
      max-width: 500px;
      button{
        height: 40px;
      }
      button:first-child{
        margin-right: 15px;
      }
      ${({ theme }) => theme.mobile`
        button{
          height: 30px;
          font-size: 12px;
        }
      `}
    }
  `,
}

export default function FinalAmount({ handleSelectedProduct, handleEntireProducts,totalPrice, paymentPrice}: IFinalAmount) {
  console.log('props pay: ', paymentPrice);
  return (
    <S.FinalAmount>
      <table>
        <caption>총 주문금액</caption>
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="40%" />
        </colgroup>
        <thead>
          <tr>
            <th>총 상품금액</th>
            <th>총 배송비</th>
            <th>총 할인금액</th>
            <th>결제예정 금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>+{PriceComma(totalPrice)}</b></td>
            <td><b>+{PriceComma(2500)}</b></td>
            <td><b>-{PriceComma(totalPrice-paymentPrice)}</b></td>
            <td><strong>= {PriceComma(2500 + paymentPrice)}</strong></td>
          </tr>
        </tbody>
      </table>

      <S.BasketButtons >
        <div className='button-wrapper'>
          <Button white fontSize='14px' onClick={handleSelectedProduct}>선택상품 주문</Button>
          <Button black fontSize='14px'  onClick={handleEntireProducts}>전체상품 주문</Button>
        </div>
      </S.BasketButtons>

    </S.FinalAmount>
  );
}
