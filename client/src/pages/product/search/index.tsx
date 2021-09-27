import React, { useEffect } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import { useQuery } from 'react-query';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import Loading from 'components/Common/Loading';
import { Get } from "api";
import ProductSearch from 'components/ProductSearch';
import { useAppContext } from 'context/AppProvider';

export default function SearchPage() {
  const router: NextRouter = useRouter();
  const { action, state } = useAppContext();

  useEffect(() => {
    const { keyword } = router.query;
    console.log('-----> keyword: ', keyword);
    action.InitData('keyword', keyword);
    console.log('----->',state.keyword);
  }, [router.query]);

  return (
    <>
      <Head>
        <title>쥬얼리 | 검색</title>
        <meta name="description" content='상품 검색' />
      </Head>
      <MainContainer >
        <ProductSearch />
      </MainContainer>
    </>
  );
}

