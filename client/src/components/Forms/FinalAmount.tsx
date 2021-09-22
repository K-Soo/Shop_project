import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import { PriceComma } from 'utils';
import { NextRouter, useRouter } from 'next/router';
import { useOrderContext } from 'context/OrderProvider';

interface IFinalAmount {
  handleSelectedProduct?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleEntireProducts?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  initBasket?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  productAmount: number;
  discountAmount: number;
  deliveryAmount?:number;
  consumerAmount: number;
  paymentAmount: number;
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
          font-size: 14px;
          font-weight: 400;
          color: #000;
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
    justify-content: space-between;
    button{
      height: 40px;
      font-size: 12px;
      letter-spacing: 0;
    }
    .button-wrapper{
      display: flex;
      max-width: 500px;
      button:first-child{
        margin-right: 15px;
      }
    }
    ${({ theme }) => theme.mobile`
        button{
          height: 30px;
        }
      `}
  `,
}

export default function FinalAmount({ handleSelectedProduct, handleEntireProducts,productAmount,discountAmount,deliveryAmount,consumerAmount,paymentAmount,initBasket }: IFinalAmount) {
  const router: NextRouter = useRouter();
  const { state: { orderForm: { amountInfo } } } = useOrderContext();

  return (
    <S.FinalAmount>
      <table>
        <caption>총 주문금액</caption>
        <colgroup>
          <col width="25%" />
          <col width="30%" />
          <col width="45%" />
        </colgroup>
        <thead>
          <tr>
            <th>총 상품금액</th>
            <th>총 할인 + 부가결제 금액</th>
            <th>배송비 + 상품 판매가 <br />= 결제예정금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>+{PriceComma(productAmount)}</b></td>
            <td><b>-{PriceComma(discountAmount)}</b></td>
            <td><strong>{PriceComma(deliveryAmount)} + {PriceComma(consumerAmount)} <br />= {PriceComma(paymentAmount)}</strong></td>
          </tr>
        </tbody>
      </table>

      {router.asPath === '/order/basket' && (
        <S.BasketButtons >
          <Button white fontSize='14px' width='120px' onClick={initBasket}>장바구니 비우기</Button>
          <div className='button-wrapper'>
            <Button white fontSize='14px' onClick={handleSelectedProduct}>선택상품 주문</Button>
            <Button black fontSize='14px' onClick={handleEntireProducts}>전체상품 주문</Button>
          </div>
        </S.BasketButtons>
      )}
    </S.FinalAmount>
  );
}