import React, { useEffect } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import List from 'components/History/List';
import { useAppContext } from 'context/AppProvider';
import { useRouter } from 'next/router';

export default function ListPage() {
  const router = useRouter();
  const { state: { userInfo } } = useAppContext();

  useEffect(() => {
    if (!userInfo.idx) {
      router.push({
        pathname: '/auth/login',
        query: { type: 'history' },
      });
    }
  }, [userInfo.idx, router]);

  return (
    <>
      <Head>
        <title>쥬얼리 | 주문내역 리스트</title>
        <meta name="description" content="상품 주문내역 리스트" />
      </Head>
      <MainContainer >
        <List idx={userInfo?.idx} />
      </MainContainer>
    </>
  );
};

