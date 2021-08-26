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
import ProductControllers from 'components/Admin/ProductControllers';
import Section from 'components/Admin/Section';
import Aside from 'components/Admin/Aside';

export default function ProductPage() {
  const router: NextRouter = useRouter();

  return (
    <>
      <Head>
        <title>관리자 | 상품</title>
        <meta name="description" content="??" />
      </Head>
      <AdminContainer>
        <ProductControllers />
      </AdminContainer>
    </>
  );
}

