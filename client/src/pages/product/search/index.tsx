import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import ProductSearch from 'components/ProductSearch';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import { NextRouter, useRouter } from 'next/router';

export default function SearchPage() {
  const router: NextRouter = useRouter();
  console.log('router.query: ', router.query);
  const { keyword } = router.query as { keyword: string };


  return (
    <>
      <Head>
        <title>쥬얼리 | 검색</title>
        <meta name="description" content='상품 검색' />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, { path: `${PAGE.SEARCH.path}${keyword}`, tag: PAGE.SEARCH.tag }].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <ProductSearch />
      </MainContainer>
    </>
  );
}

