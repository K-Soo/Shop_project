import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import FindId from "components/Auth/FindId";
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function LoginPage() {

  return (
    <>
      <Head>
        <title>아이디찾기</title>
      </Head>
      <MainContainer>
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.LOGIN, PAGE.FIND_ID].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <FindId />
      </MainContainer>
    </>
  );
}
