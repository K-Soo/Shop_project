import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import List from 'components/History/List';
import { useAppContext } from 'context/AppProvider';
import BasketProvider, { BasketContext } from 'context/BasketProvider';
import OrderProvider from 'context/OrderProvider';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
interface IBasketPage {

}

export default function ListPage(props: IBasketPage) {
  const { state: { userInfo } } = useAppContext();
  console.log('ListPage: ', props);

  return (
    <>
      <Head>
        <title>쥬얼리 | 주문내역 리스트</title>
        <meta name="description" content="상품 주문내역 리스트" />
      </Head>
      <MainContainer >
        <List idx={userInfo?.idx}/>
      </MainContainer>
    </>
  );
};

