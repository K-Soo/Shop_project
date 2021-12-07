import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Register from "components/Auth/Register";
import RegisterProvider from 'context/RegisterProvider';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';
import jwt from "jsonwebtoken";
import { Get } from "api";
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function ModifyPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 회원정보 수정</title>
        <meta name="description" content="회원정보 수정" />
      </Head>
      <RegisterProvider value={props}>
        <MainContainer >
          <Breadcrumb>
            {[PAGE.MAIN, PAGE.USERS_MODIFY].map(({ path, tag }) => (
              <Link key={path} href={path}>
                {tag}
              </Link>
            ))}
          </Breadcrumb>
          <Register />
        </MainContainer>
      </RegisterProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { access_token } = cookies(context);
  const strToken = access_token && access_token.split('Bearer ')[1];
  const decodedJwt = access_token && jwt.decode(strToken) as any;
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
      redirect: {
        destination: '/auth/login',
        permanent: false,
      }
    }
  }
};
