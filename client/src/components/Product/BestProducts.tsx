import React from "react";
import styled from "styled-components";

interface IBestProducts {

}

const S = {
  BestProducts: styled.article`
    border: 1px solid red;
    width: 100%;
  `,
}

export default function BestProducts({ }: IBestProducts) {
  return (
    <S.BestProducts>
      BestProducts
    </S.BestProducts>
  );
}
