import React from "react";
import styled from "styled-components";

const S = {
  Guide: styled.article`
    margin: 15px 0;
    border: 1px solid #eaeaea;
    padding: 20px;
    font-size: 12px;
    color: #999;
    li{
      padding-bottom: 5px;
      ::before{
        content: '# ';
        color: #000;
      }
    }
    li:last-child{
      padding-bottom: 0;
    }
    ${({ theme }) => theme.mobile`
      padding: 10px;
    `}
  `,
}

export default function Guide() {
  return (
    <S.Guide>
      <ol>
        <li>기본적으로 최근 3개월간의 자료가 조회됩니다.</li>
        <li>주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</li>
      </ol>
    </S.Guide>
  );
}
