import React from "react";
import Head from 'next/head'
import Write from 'components/Admin/NoticeControllers/Write';
import NoticeControllers from 'components/Admin/NoticeControllers';
import AdminContainer from 'containers/AdminContainer';

export default function NoticeWritePage() {
  return (
    <>
      <Head>
        <title>공지사항 | 글쓰기</title>
        <meta name="description" content="공지사항 글쓰기" />
      </Head>
      <AdminContainer>
        <NoticeControllers >
          <Write />
        </NoticeControllers>
      </AdminContainer>
    </>
  );
};