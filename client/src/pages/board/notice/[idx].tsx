import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Detail from 'components/Board/Notice/Detail';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Get } from "api";

export default function NoticeDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('DetailDetail: ', props);

  return (
    <>
      <Head>
        <title>쥬얼리 | 공지사항</title>
        <meta name="description" content="공지사항 디테일" />
      </Head>
        <MainContainer >
          <Detail />
        </MainContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { idx } = context.query as { idx: string };
  // if (!access_token) {
  //   return {
  //     redirect: {
  //       destination: '/auth/login',
  //       permanent: false,
  //     }
  //   }
  // 
  return {
    props: {
      idx
    },
  }

  // try {
  //   const userDetail = await Get.UserInfo(decodedJwt.id);
  //   return {
  //     props: {
  //       userDetail
  //     },
  //   }
  // } catch (error) {
  //   throw error;
  // }
};
