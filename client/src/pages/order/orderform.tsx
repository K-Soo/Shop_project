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
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

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
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.ORDER_FORM].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <OrderForm />
      </MainContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { access_token } = cookies(context);
  const strToken = access_token && access_token.split('Bearer ')[1];
  const decodedJwt = access_token && jwt.decode(strToken) as { [index: string]: string };

  // if (!access_token) {
  //   return {
  //     redirect: {
  //       destination: '/auth/login?type=order',
  //       permanent: false,
  //     }
  //   }
  // }
  
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
