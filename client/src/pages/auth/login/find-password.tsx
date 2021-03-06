import React from "react";
import Head from "next/head";
import MainContainer from 'containers/MainContainer';
import FindId from "components/Auth/FindId";
import FindPassword from "components/Auth/FindPassword";
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function FindPasswordPage() {

  return (
    <>
      <Head>
        <title>비밀번호 찾기</title>
      </Head>
      <MainContainer>
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.LOGIN, PAGE.FIND_PASSWORD].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <FindPassword />
      </MainContainer>
    </>
  );
}
