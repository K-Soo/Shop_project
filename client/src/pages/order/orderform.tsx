import Head from 'next/head'
import MainContainer from 'containers/MainContainer';

interface IOrderFormPage {
  
}


export default function OrderFormPage({}:IOrderFormPage) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 주문</title>
        <meta name="description" content="메인 페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer >

      </MainContainer>
    </>
  );
}
