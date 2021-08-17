import React from "react";
import styled from "styled-components";
import ImageSlider from 'components/Common/ImageSlider';

interface IProductList {
  item?: any;
}

const S = {
  ProductList: styled.article`
  `,
}

export default function ProductList({ item }: IProductList) {
  return (
    <S.ProductList>
      <ImageSlider item={item}/>
    </S.ProductList>
  );
}
