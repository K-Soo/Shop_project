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
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function GuestDetailsPage(props: any) {
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
        <Breadcrumb>
          {[PAGE.MAIN].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
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