import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import OrderForm from 'components/OrderForm';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Get } from "api";
import cookies from 'next-cookies';
import { customCookie } from 'utils';
import jwt from "jsonwebtoken";
import Cookie from "js-cookie";
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';

export default function OrderFormPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const App = useAppContext();
  const { userDetail } = props;

  useEffect(() => {
    if (!userDetail) {
      if (!App.state.status.guest) {
        router.push({
          pathname: '/auth/login',
          query: { type: 'order' },
        });
      }
    }
  }, [App.state.status.guest, userDetail, router]);

  return (
    <>
      <Head>
        <title>쥬얼리 | 상품주문</title>
        <meta name="description" content="상품 주문페이지" />
      </Head>
      <MainContainer>
        <OrderForm />
      </MainContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { access_token } = cookies(context);
  const decodedJwt = access_token && jwt.decode(access_token) as any;

  // if (!access_token) {
  //   return {
  //     redirect: {
  //       destination: '/auth/login',
  //       permanent: false,
  //     }
  //   }
  // 
  if (access_token) {
    try {
      const userDetail = await Get.UserInfo(decodedJwt.id);
      return {
        props: {
          userDetail
        },
      }
    } catch (error) {
      throw error;
    }
  } else {
    return {
      props: {
      },
    }
  }
};
