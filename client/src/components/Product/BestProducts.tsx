import React from "react";
import styled from "styled-components";
import ImageSlider from 'components/Common/ImageSlider';

interface IBestProducts {
  item?: any;
}

const S = {
  BestProducts: styled.article`
    width: 100%;
  `,
}

export default function BestProducts({ item }: IBestProducts) {
  return (
    <S.BestProducts>
      <ImageSlider item={item}/>
    </S.BestProducts>
  );
}
