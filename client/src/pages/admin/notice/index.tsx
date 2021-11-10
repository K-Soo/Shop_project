import React from "react";
import styled from "styled-components";
import Head from "next/head";
import AdminContainer from 'containers/AdminContainer';
import NoticeControllers from 'components/Admin/NoticeControllers';
import NoticeList from 'components/Admin/NoticeControllers/NoticeList';


export default function noticePage() {
  return (
    <>
      <Head>
        <title>관리자 | 공지사항</title>
      </Head>
      <AdminContainer>
        <NoticeControllers>
          <NoticeList />
        </NoticeControllers>
      </AdminContainer>
    </>
  );
}

