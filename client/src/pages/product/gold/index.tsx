import React, { useEffect, useState } from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import axios from 'axios';
import Loading from 'components/Common/Loading';
import { useQuery, UseQueryResult } from 'react-query';

const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
type Character = {
  name: string;
};

export default function GoldPage() {
  const { data, isLoading, isSuccess, isError, status, error }: UseQueryResult<Character, Error> = useQuery('gold', async () => { return await axios.get(URL) });
  console.log('data: ', data);
  // if (isLoading) {
  //   // return <Loading isLoading={isLoading} text='loading' />
  //   return <h1>loading</h1>
  // }

  if (isError) {
    return <h1>error..</h1>
  }

  return (
    <>
      <Head>
        <title>쥬얼리 | 순금</title>
        <meta name="description" content="순금 페이지" />
      </Head>
      <MainContainer >
       {isSuccess && <Product item={data?.data.slice(0, 9)} />} 
      </MainContainer>
    </>
  );
}
