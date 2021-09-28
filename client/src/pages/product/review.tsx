import React, { useEffect } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import { useQuery } from 'react-query';
import MainContainer from 'containers/MainContainer';
import ProductSearch from 'components/ProductSearch';
import Review from 'components/Review';
import { AppProps } from "next/app";

export default function ReviewPage(props: AppProps) {

  return (
    <>
      <Head>
        <title>쥬얼리 | 상품리뷰</title>
        <meta name="description" content='상품 리뷰' />
      </Head>
        <MainContainer >
          <Review />
        </MainContainer>
    </>
  );
}

