import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import { useAppContext } from 'context/AppProvider';
import BasketProvider, { BasketContext } from 'context/BasketProvider';
import OrderProvider from 'context/OrderProvider';

interface IBasketPage {

}

export default function DetailsPage(props: IBasketPage) {

  return (
    <>
      <Head>
        <title>쥬얼리 | 주문내역 상세</title>
        <meta name="description" content="상품 주문내역 상세" />
      </Head>
        <MainContainer >
          <Basket />
        </MainContainer>
    </>
  );
};




