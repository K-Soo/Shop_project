import React from "react";
import Head from "next/head";
import LoginContainer from "containers/Auth/LoginContainer";
import MainContainer from 'containers/MainContainer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface ILogin {
  className?: string;
}

export default function login() {
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <MainContainer>
        <LoginContainer />
      </MainContainer>
    </>
  );
}
