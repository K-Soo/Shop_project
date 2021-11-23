import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Point from 'components/Point';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function PointPage() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 적립금 조회</title>
        <meta name="description" content="적립금내역" />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.POINT].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Point />
      </MainContainer>
    </>
  );
}
