import React from "react";
import Head from "next/head";
import Agreement from "components/ShopInfo/Agreement";
import Breadcrumb from "components/Common/Breadcrumb";
import PAGE from "constants/path";
import Link from "next/link";
import MainContainer from 'containers/MainContainer';

export default function agreement() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 이용약관</title>
      </Head>
      <MainContainer>
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.AGREEMENT].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Agreement />
      </MainContainer>
    </>
  );
}
