import React from "react";
import Head from "next/head";
import LoginControllers from 'components/Admin/LoginControllers';
import styled from "styled-components";

const S = {
  Login: styled.div`
    background-color: #000;
    height: 100vh;
  `,
}

export default function LoginPage() {

  return (
    <>
      <Head>
        <title>관리자</title>
      </Head>
      <LoginControllers/>
    </>
  );
}


