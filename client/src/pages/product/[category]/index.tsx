import React from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import { useQuery } from 'react-query';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import { IProduct } from 'interfaces/IProduct';
import { Get } from "api";
import { CategoryEnum } from 'constants/product';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import BestProducts from 'components/Product/BestProducts';
import ProductCategory from 'components/Product/ProductCategory';

export type categoryType = `${CategoryEnum}`;


export default function ProductType() {
  const router: NextRouter = useRouter();
  const { category } = router.query as { category: string };
  const keyName = router.query.category as keyof typeof CategoryEnum
  const currentProduct: categoryType = CategoryEnum[keyName]
  const fallback: Array<null> = [];

  const { data: productData = fallback, isLoading, isSuccess, isError } = useQuery<IProduct[], Error>(['product', category], async () => await Get.products(category), {
    retry: 0,
    // keepPreviousData: true,
    // refetchOnWindowFocus: false,
    // refetchOnMount: false,
  });
  
  if (isError) {
    return <h1>error..</h1>
  }
  return (
    <>
      <Head>
        <title>쥬얼리 | {CategoryEnum[category]}</title>
        <meta name="description" content={`${CategoryEnum[category]} 카테고리 리스트`} />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, { path: `/product/${category}`, tag: `${CategoryEnum[category]}` }].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <ProductCategory
          currentProduct={currentProduct}
          keyName={keyName}
        />
        <BestProducts 
          item={productData} 
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
        <Product
          item={productData.length > 0 && productData}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </MainContainer>
    </>
  );
}


