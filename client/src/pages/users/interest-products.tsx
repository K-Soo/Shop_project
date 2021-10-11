import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import InterestProduct from 'components/InterestProduct';

export default function InterestProductPage({}) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 관심상품</title>
        <meta name="description" content="관심상품 리스트" />
      </Head>
      <MainContainer >
        <InterestProduct />
      </MainContainer>
    </>
  );
}
