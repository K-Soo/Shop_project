import React from "react";
import styled from "styled-components";

interface IFinalAmount {
  
}

const S = {
  FinalAmount: styled.div`
    border: 1px solid #333;
    margin: 30px 0;
    table{
      width: 100%;
      text-align: center;
      border-collapse: collapse;
      caption{
        display: none;
      }
      thead{
        background-color: #F9F9F9;
        th{
          padding: 14px 0;
          border: 1px solid #f0f0f0;
          font-size: 13px;
          font-weight: 400;
        }
      }
      tbody{
        td{
          font-size: 23px;
          padding: 30px 0;
          color: #353535;
          border: 1px solid #f0f0f0;
          b{
            &::after{
              content: '원';
              font-size: 14px;
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
            font-size: 14px;
            color: #8c4153;
            font-weight:600;
            vertical-align: middle;
            padding-left: 1px;
          }
        }
      }
    }
  `,
}

export default function FinalAmount({}:IFinalAmount) {
  return (
    <S.FinalAmount>
      <table>
        <caption>총 주문금액</caption>
        <colgroup>
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="55%" />
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
            <td><b>+  3000</b></td>
            <td><b>+  3000</b></td>
            <td><b>+  3000</b></td>
            <td><strong>= 3000</strong></td>
          </tr>
        </tbody>
      </table>

    </S.FinalAmount>
  );
}
