import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';

export default function DiamondDetail() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 다이아몬드</title>
      </Head>
      <MainContainer >
      DiamondDetail
        <Product />
      </MainContainer>
    </>
  );
}
