import React, { useEffect, useState } from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import Notice from 'components/Board/Notice';


export default function NoticePage() {

  return (
    <>
      <Head>
        <title>쥬얼리 | 공지사항 리스트</title>
        <meta name="description" content="공지사항 리스트 페이지" />
      </Head>
        <MainContainer >
          <Notice />
        </MainContainer>
    </>
  );
};