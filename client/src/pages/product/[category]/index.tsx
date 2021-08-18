import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { useQuery, UseQueryResult } from 'react-query';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import Loading from 'components/Common/Loading';
import { IProduct } from 'interfaces/IProduct';
import { Get } from "api";

const params = 'necklace'
const URL = `http://127.0.0.1:8000/api/product/${params}`

const fechdata = async (key:any) => {
  console.log('key: ', key);
  const res = await axios.get(URL).then(res => res.data);
  return res;
}


export default function ProductType() {
  const router: NextRouter = useRouter();

  const { category } = router.query;
  const { data, isLoading, isSuccess, isError, status, error } = useQuery(['product',category], async () => await Get.products(category));

  // const [item, setItem] = useState<IProduct[] | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get(URL);
  //       setItem(result.data);
  //       console.log('result: ', result);
  //     } catch (error) {
  //       console.log('error: ', error);
  //     }
  //   }
  //   fetchData()
  // }, [])

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
        <title>쥬얼리 | ?</title>
        <meta name="description" content="??" />
      </Head>
      <MainContainer >
        <Product item={data} />
      </MainContainer>
    </>
  );
}
