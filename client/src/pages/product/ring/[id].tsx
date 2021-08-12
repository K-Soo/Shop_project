import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';

export default function RingDetail() {
  const router = useRouter();
  const {id} = router.query;
  
  return (
    <>
      <Head>
        <title>쥬얼리 | 반지</title>
      </Head>
      <MainContainer >
      RingDetail
        <Product />
      </MainContainer>
    </>
  );
}
