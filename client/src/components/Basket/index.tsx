import React from "react";
import styled from "styled-components";
import NonLogin from 'components/Basket/NonLogin';
import Title from 'components/style/Title';
import FinalAmount from 'components/Basket/FinalAmount';
import BasketList from 'components/Basket/BasketList';

interface IBasket {

}

const S = {
  Basket: styled.div`
  `,
  SubTitle: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e8e8e8;
    margin-bottom: 10px;
    height: 35px;
    width: 100%;
    margin: 30px auto;
    ${Title}{
      position: relative;
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        background: #333;
      }
    }
  `,
}

export default function Basket({ }: IBasket) {
  return (
    <S.Basket>
      <NonLogin />
      <S.SubTitle>
        <Title level={3} size='24' textAlign='left'>일반상품</Title>
      </S.SubTitle>

      <BasketList />

      <FinalAmount />
    </S.Basket>
  );
}
