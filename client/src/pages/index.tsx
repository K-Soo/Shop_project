import MainContainer from 'containers/MainContainer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Main from 'components/Main';

export default function Home(propss) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 메인</title>
        <meta name="description" content="메인 페이지" />
      </Head>
      <MainContainer>
        <Main />
      </MainContainer>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   // const res = await Get.products();
//   const value = process.env.NODE_ENV

//   return {
//     props: {
//       env: value,
//     },
//   };
// };

