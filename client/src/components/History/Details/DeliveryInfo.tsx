import React from 'react';
import styled from "styled-components";
import { IOrderDetail } from 'interfaces/IOrder';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import { useRouter, NextRouter } from 'next/router';
import PAGE from 'constants/path';
interface IDeliveryInfo {
  items: IOrderDetail[]
  handlePrint: any;
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
  ButtonBox: styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back{
      i{
        font-size: 0;
        padding-right: 5px;
        svg{
          color: #fff;
        }
      }
    }
    button{
      font-size: 12px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .print{
      ${({ theme }) => theme.mobile`
        display: none;
      `}
    }
  `,
}

export default function DeliveryInfo({ items, handlePrint }: IDeliveryInfo) {
  const router: NextRouter = useRouter();
  const handleRoute = () => {
    if (router.pathname !== "/users/history/guest-detail/[idx]") {
      router.push(PAGE.HISTORY.path);
    } else {
      router.push(PAGE.MAIN.path);
    }
  }

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
              <td>{d.createdAt}</td>
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
        <Button className='print' height='30px' white width='100px' onClick={handlePrint}>주문내역 출력</Button>

        <Button className='back' height='30px' black width='120px' onClick={handleRoute}>
          <i><Icon name='back' /></i>
          {router.pathname !== "/users/history/guest-detail/[idx]" && <span>주문목록 보기</span>}
          {router.pathname === "/users/history/guest-detail/[idx]" && <span>메인으로</span>}
        </Button>
      </S.ButtonBox>
    </S.DeliveryInfo>
  );
}
