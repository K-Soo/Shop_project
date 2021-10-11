import React from "react";
import Head from "next/head";
import LoginContainer from "containers/Auth/LoginContainer";
import MainContainer from 'containers/MainContainer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter, NextRouter } from 'next/router';
import Login from "components/Auth/Login";

export default function LoginPage() {
  const router: NextRouter = useRouter();
  const { type } = router.query as { type: string }

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <MainContainer>
        <Login type={type} />
      </MainContainer>
    </>
  );
}
