import React from "react";
import styled from "styled-components";

interface IProductList {

}

const S = {
  ProductList: styled.article`
  `,
}

export default function ProductList({ }: IProductList) {
  return (
    <S.ProductList>
      ProductList
    </S.ProductList>
  );
}
