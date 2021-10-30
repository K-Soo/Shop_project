import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import { useAppContext } from 'context/AppProvider';
import OrderProvider from 'context/OrderProvider';

interface IBasketPage {

}

export default function BasketPage(props: IBasketPage) {

  return (
    <>
      <Head>
        <title>쥬얼리 | 장바구니</title>
        <meta name="description" content="장바구니 정보" />
      </Head>
      {/* <OrderProvider value={props}> */}
        <MainContainer >
          <Basket />
        </MainContainer>
      {/* </OrderProvider> */}
    </>
  );
};





