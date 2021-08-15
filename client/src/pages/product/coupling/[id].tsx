import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';

export default function CouplingDetail() {
  const router = useRouter();
  const {id} = router.query;
  
  return (
    <>
      <Head>
        <title>쥬얼리 | 커플링</title>
      </Head>
      <MainContainer >
        <Product />
      </MainContainer>
    </>
  );
}