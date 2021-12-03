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
import AdminContainer from 'containers/AdminContainer';
import NoticeControllers from 'components/Admin/NoticeControllers';
import NoticeDetail from 'components/Admin/NoticeControllers/NoticeDetail';

export default function AdminNoticeDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} />
  }

  return (
    <>
      <Head>
        <title>관리자</title>
      </Head>
      <AdminContainer>
        <NoticeControllers>
          <NoticeDetail item={props.item} />
        </NoticeControllers>
      </AdminContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query as { id: string };
  try {
    const res = await Get.getNoticeDetail(id);
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