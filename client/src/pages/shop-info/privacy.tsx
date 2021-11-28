import React from "react";
import Head from "next/head";
import Privacy from "components/ShopInfo/Privacy";
import Breadcrumb from "components/Common/Breadcrumb";
import PAGE from "constants/path";
import Link from "next/link";
import MainContainer from 'containers/MainContainer';

export default function privacy() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 개인정보 취급방침</title>
      </Head>
      <MainContainer>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.PRIVACY].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
      <Privacy />
      </MainContainer>
    </>
  );
}
