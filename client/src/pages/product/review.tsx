import React, { useEffect } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import { useQuery } from 'react-query';
import MainContainer from 'containers/MainContainer';
import ProductSearch from 'components/ProductSearch';
import Review from 'components/Review';
import { AppProps } from "next/app";
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function ReviewPage(props: AppProps) {
  const router: NextRouter = useRouter();
  console.log('router: ', router);
  const { idx, productId } = router.query as { idx: string, productId: string };
  return (
    <>
      <Head>
        <title>쥬얼리 | 상품리뷰</title>
        <meta name="description" content='상품 리뷰' />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, { path: `${PAGE.REVIEW.path}${idx}&productId=${productId}`, tag: `${PAGE.REVIEW.tag}` }].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Review />
      </MainContainer>
    </>
  );
}

