import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Notice from 'components/Board/Notice';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function NoticePage() {

  return (
    <>
      <Head>
        <title>쥬얼리 | 공지사항 리스트</title>
        <meta name="description" content="공지사항 리스트 페이지" />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, PAGE.NOTICE].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Notice />
      </MainContainer>
    </>
  );
};