import React from "react";
import styled from "styled-components";

interface IBasket {
  
}

const S = {
  Basket: styled.div`
  `,
}

export default function Basket({}:IBasket) {
  return (
    <S.Basket>
      Basket
    </S.Basket>
  );
}
