import React from "react";
import styled from "styled-components";
import Head from "next/head";
import AdminContainer from 'containers/AdminContainer';
import NoticeControllers from 'components/Admin/NoticeControllers';
import NoticeList from 'components/Admin/NoticeControllers/NoticeList';
import Title from 'components/style/Title';


export default function noticePage() {
  return (
    <>
      <Head>
        <title>관리자 | 공지사항</title>
      </Head>
      <AdminContainer>
        <NoticeControllers>
          <Title level={1} margin='0 0 30px 0'>공지사항</Title>
          <NoticeList />
        </NoticeControllers>
      </AdminContainer>
    </>
  );
}

