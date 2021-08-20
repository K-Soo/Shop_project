import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
interface IBasketPage {

}

export default function BasketPage({ }: IBasketPage) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 장바구니</title>
        <meta name="description" content="메인 페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer >
        <Basket />
      </MainContainer>
    </>
  );
}
