import React, { useEffect } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Register from "components/Auth/Register";
import RegisterProvider from 'context/RegisterProvider';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';
import { customCookie } from 'utils';
import jwt from "jsonwebtoken";
import { Get } from "api";
import { useRouter } from 'next/router';
import MyShopping from 'components/MyShopping';

export default function usersPage() {
  return (
    <>
      <Head>
        <title>쥬얼리 | 마이쇼핑</title>
        <meta name="description" content="마이쇼핑 홈" />
      </Head>
      <MainContainer >
        <MyShopping />
      </MainContainer>
    </>
  );
}
