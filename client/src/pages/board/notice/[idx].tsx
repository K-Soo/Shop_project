import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Detail from 'components/Board/Notice/Detail';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Get } from "api";
import Error from 'next/error';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function NoticeDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  console.log('router: ', router);

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
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.NOTICE].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Detail item={props.item} />
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
        item: res,
      },
    }
  } catch (error: any) {
    return {
      props: {
        errorCode: error.response.status,
      },
    }
  }
};
