import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import { BUY_INFO_DELIVERY,EXCHANGE_RETURN } from 'constants/product';
const S = {
  BuyInfoTap: styled.div`
    ${Title}{
      font-size: 20px;
      margin: 40px 0 20px 0;
    }
    .desc{
      color: #333;
      padding: 10px 0;
      font-size: 14px;
      ::before{
        content: '-';
        padding-right: 5px;
        color: #333;
      }
    }
    ${({ theme }) => theme.mobile`
      ${Title}{
        font-size: 18px;
        margin: 30px 0 20px 0;
      }
      .desc{
        font-size: 13px;
        padding: 5px 0;
      }
  
    }
  `}
  `,
}

export default function BuyInfoTap() {
  return (
    <S.BuyInfoTap>
      <Title level={6} textAlign="left">주문전 반드시 확인해 주세요!</Title>
      <ul>
        <li>
          <p className="desc">제품의 색상은 모니터 설정 및 모바일 환경에 따라 약간씩 차이가 있을 수 있습니다.</p>
        </li>
      </ul>

      <Title level={6} textAlign="left">배송안내</Title>
      <ul>
        {BUY_INFO_DELIVERY.map(d => (
          <li key={d}>
            <p className="desc">{d}</p>
          </li>
        ))}
      </ul>

      <Title level={6} textAlign="left">교환/반품 불가능한 경우</Title>
      <ul>
        {EXCHANGE_RETURN.map(d => (
          <li key={d}>
            <p className="desc">{d}</p>
          </li>
        ))}
      </ul>
    </S.BuyInfoTap>
  );
}
