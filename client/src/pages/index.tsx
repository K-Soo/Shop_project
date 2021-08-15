import Head from 'next/head'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import MainContainer from 'containers/MainContainer';
import { Post, Get } from "api";

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('propsxxx: ', props);
  return (
    <>
      <Head>
        <title>쥬얼리 | 메인</title>
        <meta name="description" content="메인 페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  // const res = await Get.products();
  return {
    props: {},
  };
};

