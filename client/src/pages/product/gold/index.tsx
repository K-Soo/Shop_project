import React from "react";
import Head from "next/head";
import MainContainer from 'container/MainContainer';
import Product from 'components/Product';

export default function gold() {
  const arry = [1,2,3];
  return (
    <>
      <Head>
        <title>쥬얼리 | 순금</title>
      </Head>
      <MainContainer >
        <Product arry={arry}/>
      </MainContainer>
    </>
  );
}
