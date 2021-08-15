import React from "react";
import Head from "next/head";
import RegisterContainer from "containers/Auth/RegisterContainer";
import RegisterProvider from 'context/RegisterProvider';

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
        <RegisterContainer />
      </RegisterProvider>
    </>
  );
}
