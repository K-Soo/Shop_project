import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import { useAppContext } from 'context/AppProvider';
import OrderProvider from 'context/OrderProvider';
import Details from 'components/History/Details';
import PageTitle from 'components/Common/PageTitle';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Get } from "api";
import Error from 'next/error';


export default function DetailsPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} />
  }

  return (
    <>
      <Head>
        <title>쥬얼리 | 주문내역 상세</title>
        <meta name="description" content="상품 주문내역 상세" />
      </Head>
      <MainContainer >
        <Details items={props.items}/>
      </MainContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { idx, orderNum } = context.query as { idx: string, orderNum: string };
  try {
    const res = await Get.getUserHistoryDetail(idx, orderNum);
    return {
      props: {
        items: res
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

