import React, { useCallback } from "react";
import styled from "styled-components";
import ImageSlider from 'components/Common/ImageSlider';
import { IProduct } from 'interfaces/IProduct';
import TitleLine from 'components/SideMenu/common/TitleLine';

interface IBestProducts {
  item?: IProduct[];
}

const S = {
  BestProducts: styled.article`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  `,
}

export default function BestProducts({ item }: IBestProducts) {
  const bestItems = useCallback(() => {
    return item?.filter(d => d.best_product && d.qty >= 1);
  }, [item]);

  return (
    <S.BestProducts>
      <ImageSlider item={bestItems()} />
    </S.BestProducts>
  );
}
