import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import ProductSearch from 'components/ProductSearch';

export default function SearchPage() {

  return (
    <>
      <Head>
        <title>쥬얼리 | 검색</title>
        <meta name="description" content='상품 검색' />
      </Head>
      <MainContainer >
        <ProductSearch />
      </MainContainer>
    </>
  );
}

