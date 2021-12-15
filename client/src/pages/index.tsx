import MainContainer from 'containers/MainContainer';
import Head from 'next/head';
import Main from 'components/Main';

export default function Home() {

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
