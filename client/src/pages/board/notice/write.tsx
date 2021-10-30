import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Write from 'components/Board/Notice/Write';


export default function NoticeWritePage() {
  return (
    <>
      <Head>
        <title>공지사항 | 글쓰기</title>
        <meta name="description" content="공지사항 글쓰기" />
      </Head>
        <MainContainer >
          <Write />
        </MainContainer>
    </>
  );
};