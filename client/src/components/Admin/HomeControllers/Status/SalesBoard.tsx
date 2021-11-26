import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import Icon from 'components/Icon/Icon';
import Button from 'components/style/Button';
import { ISalesData } from 'interfaces/IAdmin';
import { PriceComma } from 'utils';
import { useRouter, NextRouter } from 'next/router';
import { useAdminContext } from 'context/AdminProvider';
interface ISalesBoard {
  salesData: ISalesData;
  salesStatus?: any;
}

const S = {
  SalesBoard: styled.div<{ isWhite: boolean }>`
    background-color: ${props => props.isWhite ? '#fff' : '#1F2A40'};
    transition: background-color 0.3s ease;
    margin-bottom :15px;
    padding: 20px;
    border-radius: 5px;
    .header{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      &__title-box{
        display: flex;
        align-items: center;
        ${Title}{
          font-size: 18px;
        }
      }
      &__button-box{
        display: flex;
        button{
          font-size: 12px;
          height: 30px;
        }
      }
    }
    .board{
      display: flex;
      background-color: ${props => props.isWhite ? '#f8f8f8' : '#131C2D'};
      transition: background-color 0.3s ease;
      justify-content: space-between;
      flex: 1;
      padding: 20px;
      ${Title}{
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 5px;
      }
      li{
        text-align: center;
        color: #354052;
      }
    }
  `,
}

export default function SalesBoard({ salesData, salesStatus }: ISalesBoard) {
  const router: NextRouter = useRouter();
  const { state } = useAdminContext();

  if (salesStatus === 'loading') {
    return <div>loading</div>
  }

  return (
    <S.SalesBoard isWhite={state.isWhite}>
      <div className='header'>
        <div className='header__title-box'>
          <Title level={2}>오늘 판매현황</Title>
        </div>
        <div className='header__button-box'>
          <Button 
            margin='0 10px 0 0' 
            black 
            onClick={() => router.push('admin/products/list')}
          >
            판매설정
          </Button>
          <Button 
            black 
            onClick={() => router.push('admin/products/create')}
          >
            상품추가
          </Button>
        </div>
      </div>

      {salesStatus === 'success' && (
        <ul className='board'>
          <li className='board__payment-complete'>
            <Title level={3}>결제완료</Title>
            <strong>{salesData.paymentComplete}건</strong>
          </li>
          <li className='board__Amount'>
            <Title level={3}>판매액</Title>
            <strong>{PriceComma(salesData.totalAmount)}원</strong>
          </li>
          <li className='board__asd'>
            <Title level={3}>판매 수량</Title>
            <strong>{salesData.ProductCnt}개</strong>
          </li>
        </ul>
      )}
    </S.SalesBoard>
  );
}
