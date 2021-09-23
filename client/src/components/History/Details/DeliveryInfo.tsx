import React from "react";
import styled from "styled-components";
import { IOrderDetail } from 'interfaces/IOrder';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';

interface IDeliveryInfo {
  items: IOrderDetail[]
}

const S = {
  DeliveryInfo: styled.div`
    table{
    border-collapse: collapse;
    font-size: 12px;
    tbody{
      tr{
        border: 1px solid red;
        th{
          background-color: #f9f9f9;
          font-weight: 400;
          color: #000;
        }
        td{
          color: #353535;
        }
        th,td{
          border: 1px solid #f0f0f0;
          padding: 20px 10px;
          text-align: left;
        }
      }
    }
    ${({ theme }) => theme.mobile`
      font-size: 11px;
        tbody{
          tr{
            th,td{
              padding: 10px 10px;
            }
          }
        }
    `}
  }
  `,
  ButtonBox:styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  `,
}

export default function DeliveryInfo({items}:IDeliveryInfo) {
  return (
    <S.DeliveryInfo>
      {items && items.map(d => (
        <table key={d._id}>
          <colgroup>
            <col width="115px" />
            <col width="auto" />
          </colgroup>
          <tbody>
            <tr>
              <th>주문번호</th>
              <td>{d.orderNum}</td>
            </tr>
            <tr>
              <th>주문일자</th>
              <td>{d.createAt}</td>
            </tr>
            <tr>
              <th>주문자</th>
              <td>{d.userName}</td>
            </tr>
            <tr>
              <th>주문처리상태</th>
              <td>결제완료</td>
            </tr>
          </tbody>
        </table>
      ))}
      <S.ButtonBox>
        <Button height='20px' white width='100px'>결제</Button>
        <Button height='30px' black width='100px'>
          {/* <Icon name='menu' /> */}
        </Button>
      </S.ButtonBox>
    </S.DeliveryInfo>
  );
}
