import MainContainer from 'containers/MainContainer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('props: ', props);
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
  const value = process.env.NAME

  return {
    props: {
      envdata: value,
    },
  };
};

