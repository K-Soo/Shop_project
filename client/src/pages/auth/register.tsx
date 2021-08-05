import React from "react";
import Head from "next/head";
import RegisterContainer from "container/Auth/RegisterContainer";

interface IRegister {
  className?: string;
}

export default function register() {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <RegisterContainer />
    </>
  );
}
