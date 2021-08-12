import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';




export default function EarringPage() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 귀걸이</title>
      </Head>
      <MainContainer >
        EarringPage
        <Product />
      </MainContainer>
    </>
  );
}
