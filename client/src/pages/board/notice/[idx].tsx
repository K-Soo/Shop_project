import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Detail from 'components/Board/Notice/Detail';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Get } from "api";
import Error from 'next/error';

export default function NoticeDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} />
  }

  return (
    <>
      <Head>
        <title>쥬얼리 | 공지사항</title>
        <meta name="description" content="공지사항 디테일" />
      </Head>
        <MainContainer >
          <Detail item={props.item}/>
        </MainContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { idx } = context.query as { idx: string };
  try {
    const res = await Get.getNoticeDetail(idx);
    return {
      props: {
        item:res,
      },
    }
  } catch (error:any) {
    return {
      props: {
        errorCode: error.response.status,
      },
    }
  }
};
