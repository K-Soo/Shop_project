import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import { PointData } from 'interfaces/IAdmin';
import { PriceComma, CurrentDate } from 'utils';
import Loading from 'components/Loading';

interface IPointBoard {
  pointData: PointData;
  PointStatus: string;
}

const S = {
  PointBoard: styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 15px;
    .header{
      margin-bottom: 20px;
      ${Title}{
        font-size: 18px;
        text-align: left;
      }
    }
  `,
  CurrentDate: styled.p`
    margin-top: 20px;
    font-size: 14px;
    color: #354052;
    font-weight: 400;
  `,
  CurrentProductsInfo: styled.ul`
  li:first-child{
    margin-bottom: 10px;
  }
  dl{
    dt{
      margin-bottom: 5px;
      font-size: 14px;
      color: #707070;
    }
    dd{
      font-size: 20px;
      color: #354052;
    }
  }
  `,
}

export default function PointBoard({ pointData, PointStatus }: IPointBoard) {

  if(PointStatus === 'error'){
    return <div>error</div>
  }
  
  return (
    <S.PointBoard>
      <div className='header'>
        <Title level={2}>포인트</Title>
      </div>
      {PointStatus === 'loading' && (
        <Loading
          height={100}
          text=''
          isLoading={true} />
      )}
      {PointStatus === 'success' && (
        <>
          <S.CurrentProductsInfo>
            <li>
              <dl>
                <dt>판매수 / 판매액</dt>
                <dd>{pointData.ProductCnt}개 / {PriceComma(pointData.totalAmount)}원</dd>
              </dl>
            </li>

            <li>
              <dl>
                <dt>사용된 포인트</dt>
                <dd>{PriceComma(pointData.totalPoints)}원</dd>
              </dl>
            </li>
          </S.CurrentProductsInfo>
          <S.CurrentDate>{CurrentDate()}</S.CurrentDate>
        </>
      )}
    </S.PointBoard>
  );
}
