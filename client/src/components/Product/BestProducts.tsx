import React, { useCallback } from "react";
import styled from "styled-components";
import ImageSlider from 'components/Common/ImageSlider';
import { IProduct } from 'interfaces/IProduct';
import Loading from 'components/Loading';

interface IBestProducts {
  item?: IProduct[];
  isLoading: boolean;
  isSuccess: boolean;
}

const S = {
  BestProducts: styled.article`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  `,
}

export default function BestProducts({ item, isLoading, isSuccess }: IBestProducts) {
  const bestItems = useCallback(() => {
    return item?.filter(d => d.best_product && d.qty >= 1);
  }, [item]);
  return (
    <S.BestProducts>
      {isLoading && (
        <Loading
          isLoading={isLoading}
          height={300}
          text=''
        />
      )}
      {isSuccess && (
        <ImageSlider item={bestItems()} />
      )}
    </S.BestProducts>
  );
}
