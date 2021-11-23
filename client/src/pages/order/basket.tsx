import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function BasketPage(props:any) {

  return (
    <>
      <Head>
        <title>쥬얼리 | 장바구니</title>
        <meta name="description" content="장바구니 정보" />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.BASKET].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Basket />
      </MainContainer>
    </>
  );
};





