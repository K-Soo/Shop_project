import React from 'react';
import styled from 'styled-components';
import BestProducts from 'components/Product/BestProducts';
import ProductList from 'components/Product/ProductList';
import ProductCategory from 'components/Product/ProductCategory';
import { PRODUCT } from '../../../utils/constants/product';
import { useRouter } from 'next/router';
interface IProduct {
  className?: string;
  items?: any;
}

export enum category {
  necklace = '목걸이',
  gold = '순금',
}

export type categoryType = `${category}`;

function Product(props: IProduct) {
  console.log(PRODUCT);
  const router = useRouter();
  const { pathname } = router
  const keyName = pathname.split('/')[2] as keyof typeof category;
  const currentProduct: categoryType = category[keyName]

  return (
    <section className={props.className}>
      <ProductCategory currentProduct={currentProduct} keyName={keyName}/>
      <BestProducts />
      <ProductList />
    </section>
  )
};


export default styled(Product)`
  width: 100%;
  height: 100%;
`;