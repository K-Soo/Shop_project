import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Point from 'components/Point';

export default function PointPage() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 적립금 조회</title>
        <meta name="description" content="적립금내역" />
      </Head>
      <MainContainer >
        <Point />
      </MainContainer>
    </>
  );
}
