import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';

export default function NecklacePage() {
  
  return (
    <>
      <Head>
        <title>쥬얼리 | 목걸이</title>
      </Head>
      <MainContainer >
        <Product />
      </MainContainer>
    </>
  );
}
