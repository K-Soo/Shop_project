import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import InterestProduct from 'components/InterestProduct';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function InterestProductPage({ }) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 관심상품</title>
        <meta name="description" content="관심상품 리스트" />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.INTEREST].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <InterestProduct />
      </MainContainer>
    </>
  );
}
