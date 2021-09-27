import React, { useCallback } from 'react';
import styled from 'styled-components';
import BestProducts from 'components/Product/BestProducts';
import ProductList from 'components/Product/ProductList';
import ProductCategory from 'components/Product/ProductCategory';
import { PRODUCT, CategoryEnum} from 'constants/product';
import { useRouter } from 'next/router';
import ProductSortMenu from 'components/Common/ProductSortMenu';
import { useAppContext } from 'context/AppProvider';
import {useSelectCategory} from 'hooks/useSelectCategory';


interface IProduct {
  item?: any;
}

export type categoryType = `${CategoryEnum}`;

const S = {
  Product: styled.section`
    width: 100%;
  `,
}

export default function Product({ item }: IProduct) {
  const router = useRouter();
  const keyName = router.query.category as keyof typeof CategoryEnum
  const currentProduct: categoryType = CategoryEnum[keyName]
  const result = useSelectCategory(item);

  return (
    <S.Product>
      <ProductCategory currentProduct={currentProduct} keyName={keyName} />
      <BestProducts item={item} />
      <ProductSortMenu itemCount={result?.length} />
      <ProductList item={result} />
    </S.Product>
  )
};



