import React, { useCallback } from 'react';
import styled from 'styled-components';
import BestProducts from 'components/Product/BestProducts';
import ProductList from 'components/Product/ProductList';
import ProductCategory from 'components/Product/ProductCategory';
import { PRODUCT, CategoryEnum } from 'constants/product';
import { useRouter } from 'next/router';
import ProductSortMenu from 'components/Common/ProductSortMenu';
import { useAppContext } from 'context/AppProvider';
import { useSelectCategory } from 'hooks/useSelectCategory';
import { useSort } from 'hooks/useSort';
import { IProduct } from 'interfaces/IProduct';


interface IProductProps {
  item: IProduct[];
  isLoading: boolean;
  isSuccess: boolean;
}

export type categoryType = `${CategoryEnum}`;

const S = {
  Product: styled.section`
    width: 100%;
  `,
}

export default function Product({ item, isLoading, isSuccess }: IProductProps) {
  const router = useRouter();
  const keyName = router.query.category as keyof typeof CategoryEnum
  const currentProduct: categoryType = CategoryEnum[keyName]
  const selectedItem = useSelectCategory(item);
  const { setSort, sortingData } = useSort(selectedItem);

  return (
    <S.Product>
      <ProductCategory currentProduct={currentProduct} keyName={keyName} />

      {isSuccess && <BestProducts item={item} />}

      <ProductSortMenu itemCount={selectedItem?.length} setSort={setSort} />
      <ProductList items={sortingData} isLoading={isLoading} isSuccess={isSuccess} />
    </S.Product>
  )
};



