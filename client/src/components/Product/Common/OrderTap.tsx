import React from "react";
import styled from "styled-components";
import Select from 'components/style/Select';

interface IOrderTap {
  itemCount: number;
}

const S = {
  OrderTap: styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
  `,
  ProductCount: styled.div`
    border: 1px solid #333;
    color: #222;
    width: 100px;
    font-weight: 400;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    strong{
      font-size: 18px;
      /* text-align: center; */
      width: 100%;
      &::after{
        content: '개 상품'
      }
    }
  `,
}

export default function OrderTap({ itemCount }: IOrderTap) {

  return (
    <S.OrderTap>
      <S.ProductCount>
        <strong>
          {itemCount}
        </strong>
      </S.ProductCount>
      <Select width='200'>
        <option value="">상품정렬</option>
        <option value="row">낮은가격</option>
        <option value="hight">높은가격</option>
        <option value="new">신상품</option>
        <option value="best">인기상품</option>
      </Select>
    </S.OrderTap>
  );
}
