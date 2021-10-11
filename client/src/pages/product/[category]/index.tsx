import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import { useQuery, UseQueryResult } from 'react-query';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import Loading from 'components/Common/Loading';
import { IProduct } from 'interfaces/IProduct';
import { Get } from "api";
import { CategoryEnum } from 'constants/product';

export default function ProductType(props: any) {
  const router: NextRouter = useRouter();
  const { category } = router.query as { category: string };
  const fallback: Array<null> = [];

  const { data: productData = fallback, isLoading, isSuccess, isError,  error } = useQuery<IProduct[], Error>(['product', category], async () => await Get.products(category), {
    retry: 0,
    refetchOnWindowFocus: false,
  });
  
  if (error instanceof Error) {
    console.log('response', error);
  }

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
        <Product item={productData} isLoading={isLoading} isSuccess={isSuccess}/>
      </MainContainer>
    </>
  );
}


