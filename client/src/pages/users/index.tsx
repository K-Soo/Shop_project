import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import MyShopping from 'components/MyShopping';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function usersPage() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 마이쇼핑</title>
        <meta name="description" content="마이쇼핑 홈" />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN,PAGE.MY_SHOP].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <MyShopping />
      </MainContainer>
    </>
  );
}
