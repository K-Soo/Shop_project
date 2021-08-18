import React, { useEffect, useState } from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import axios from 'axios';
import Loading from 'components/Common/Loading';
import { useQuery, UseQueryResult } from 'react-query';
import { IProduct } from 'interfaces/IProduct';


const params = 'necklace'
const URL = `http://127.0.0.1:8000/api/product/${params}`

type Character = {
  name: string;
};

export default function ProductType() {
  // const { data, isLoading, isSuccess, isError, status, error }: UseQueryResult<Character, Error> = useQuery('gold', async () => { return await axios.get(URL) });

  const [item, setItem] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(URL);
        setItem(result.data);
        console.log('result: ', result);
      } catch (error) {
        console.log('error: ', error);
      }
    }
    fetchData()
  }, [])

  // if (isLoading) {
  //   // return <Loading isLoading={isLoading} text='loading' />
  //   return <h1>loading</h1>
  // }

  // if (isError) {
  //   return <h1>error..</h1>
  // }

  return (
    <>
      <Head>
        <title>쥬얼리 | 순금</title>
        <meta name="description" content="순금 페이지" />
      </Head>
      <MainContainer >
        <Product item={item} />
      </MainContainer>
    </>
  );
}
