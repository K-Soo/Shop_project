import React from 'react';
import styled from 'styled-components';
import BestProducts from 'components/Product/BestProducts';
import ProductList from 'components/Product/ProductList';
import ProductCategory from 'components/Product/ProductCategory';
import { PRODUCT } from 'constants/product';
import { useRouter } from 'next/router';
import OrderTap from 'components/Product/Common/OrderTap';
import {IProduct} from 'interfaces/IProduct';

interface IProduct {
  item?: any;
}

export enum category {
  necklace = '목걸이',
  earring = '귀걸이',
  ring = '반지',
  bracelet = '팔찌',
  anklet = '발찌',
  gold = '순금',
  diamond = '다이아몬드',
  coupling = '커플링'
}

export type categoryType = `${category}`;

const S = {
  Product: styled.section`
    width: 100%;
  `,
}

export default function Product({ item }: IProduct) {
  const router = useRouter();
  const keyName = router.query.category as keyof typeof category
  const currentProduct: categoryType = category[keyName]

  return (
    <S.Product>
      <ProductCategory currentProduct={currentProduct} keyName={keyName} />
      <BestProducts item={item} />
      <OrderTap itemCount={item?.length}/>
      <ProductList item={item}/>
    </S.Product>
  )
};



