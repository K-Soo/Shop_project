import React from "react";
import styled from "styled-components";
import { IOrderDetail } from 'interfaces/IOrder';
import { PriceComma } from 'utils';

interface IPaymentInfo {
  items: IOrderDetail[]
}

const S = {
  PaymentInfo: styled.div`
    table{
    border-collapse: collapse;
    font-size: 12px;
    tbody{
      tr{
        th{
          font-weight: 400;
          color: #000;
        }
        td{
          color: #353535;
        }
        th,td{
          background-color: #f9f9f9;
          padding: 20px 10px;
          text-align: left;
        }
      }
      .order-price{
        th,td{
          font-weight: 500;
          border: 1px solid #f0f0f0;
        }

      }
      .total-used-point{
        th,td{
          font-weight: 500;
          border: 1px solid #f0f0f0;
        }
      }
      .point{
        th,td{
          font-weight: normal;
          border: solid #f0f0f0;
          border-width: 1px 1px 0 1px;
        }
        td{
          background-color: #fff;
        }
      }
      .payment-price{
        border: solid #000;
        border-width: 1px 1px 0 1px;
        th{
          font-weight: 500;
          border: solid #f0f0f0;
          border-width: 0 1px 1px 0;
        }
        td{
          border: solid #f0f0f0;
          border-width: 0 0 1px 0;
          font-size: 16px;
          font-weight: 500;
          color: #8c4153;

        }
      }
      .payment-method{
        border: solid #000;
        border-width: 0 1px 1px 1px;
        th{
          border: solid #f0f0f0;
          border-width: 0 1px 0 0;
        }
        td{
          background-color: #fff;
        }
      }
    }
    ${({ theme }) => theme.mobile`
      font-size: 11px;
        tbody{
          tr{
            th,td{
              padding: 10px 10px;
              font-weight: 400;
            }
          }
        }
    `}
  }

  `,
}

export default function PaymentInfo({ items }: IPaymentInfo) {
  console.log('items: ', items);
  return (
    <S.PaymentInfo>
      {items && items.map(d => (
        <table key={d._id}>
          <colgroup>
            <col width="115px" />
            <col width="auto" />
          </colgroup>
          <tbody>
            <tr className='order-price'>
              <th>총 주문결제금액</th>
              <td>{PriceComma(d.amountInfo.consumerAmount + d.amountInfo.deliveryAmount)}원</td>
            </tr>
            <tr className='total-used-point'>
              <th>총 부가결제금액</th>
              <td>{PriceComma(d.pointInfo.totalUsed)}원</td>
            </tr>
            <tr className='point'>
              <th>적립금</th>
              <td>{PriceComma(d.pointInfo.estimatedPoint)}원</td>
            </tr>
            <tr className='payment-price'>
              <th>총 결제금액</th>
              <td>{PriceComma(d.amountInfo.paymentAmount)}원</td>
            </tr>
            <tr className='payment-method'>
              <th>결제수단</th>
              <td>페이팔</td>
            </tr>
          </tbody>
        </table>
      ))}
    </S.PaymentInfo>
  );
}
