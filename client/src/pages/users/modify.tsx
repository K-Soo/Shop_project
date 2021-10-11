import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Register from "components/Auth/Register";
import RegisterProvider from 'context/RegisterProvider';

export default function ModifyPage() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 회원정보 수정</title>
        <meta name="description" content="회원정보 수정" />
      </Head>
      <RegisterProvider >
        <MainContainer >
          <Register />
        </MainContainer>
      </RegisterProvider>
    </>
  );
}
