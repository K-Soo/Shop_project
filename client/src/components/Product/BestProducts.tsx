import React, { useCallback } from "react";
import styled from "styled-components";
import ImageSlider from 'components/Common/ImageSlider';
import { IProduct } from 'interfaces/IProduct';

interface IBestProducts {
  item?: IProduct[];
}

const S = {
  BestProducts: styled.article`
    width: 100%;
  `,
}

export default function BestProducts({ item }: IBestProducts) {

  const bestItems = useCallback(() => {
   return item?.filter(d => d.best_product);
  }, [item]);

  return (
    <S.BestProducts>
      <ImageSlider item={bestItems()} />
    </S.BestProducts>
  );
}
