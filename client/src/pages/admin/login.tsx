import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from 'axios';
import { NextRouter, useRouter } from 'next/router';
import { useQuery, UseQueryResult } from 'react-query';
import MainContainer from 'containers/MainContainer';
import AdminContainer from 'containers/AdminContainer';
import Product from 'components/Product';
import Loading from 'components/Common/Loading';
import { IProduct } from 'interfaces/IProduct';
import { Get } from "api";
import Admin from 'components/Admin';
import LoginControllers from 'components/Admin/LoginControllers';
import styled from "styled-components";
import { useAdminContext } from 'context/AdminProvider';
import { useAppContext } from 'context/AppProvider';

const S = {
  Login: styled.div`
    background-color: #000;
    height: 100vh;
  `,
}

export default function LoginPage() {
  const { state, action } = useAdminContext();
  const router: NextRouter = useRouter();
  const { state: { userInfo } } = useAppContext();

  return (
    <>
      <Head>
        <title>관리자</title>
      </Head>
      <LoginControllers/>
    </>
  );
}


