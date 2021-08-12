import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';

export default function CouplingPage() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 커플링</title>
      </Head>
      <MainContainer >
      CouplingPage
        <Product />
      </MainContainer>
    </>
  );
}
