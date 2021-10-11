import React from "react";
import Head from "next/head";
import RegisterProvider from 'context/RegisterProvider';
import MainContainer from 'containers/MainContainer';
import Register from "components/Auth/Register";

interface IRegister {
  className?: string;
}

export default function register() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 회원가입</title>
      </Head>
      <RegisterProvider >
        <MainContainer>
          <Register />
        </MainContainer>
      </RegisterProvider>
    </>
  );
}
