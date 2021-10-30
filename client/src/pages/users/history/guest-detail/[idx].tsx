import React, { useEffect } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import List from 'components/History/List';
import { useAppContext } from 'context/AppProvider';
import OrderProvider from 'context/OrderProvider';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Details from 'components/History/Details';
import Error from 'next/error';
import { Get } from "api";

export default function GuestDetailsPage(props: any) {
  console.log('GuestDetailsPage: ', props);
  const router = useRouter();
  console.log('router: ', router);
  const { state: { userInfo } } = useAppContext();

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
        <Details items={props.items} />
      </MainContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { idx } = context.query as { idx: string };

  try {
    const res = await Get.getGuestHistoryDetail(idx);
    console.log('res: ', res);
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