import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import OrderForm from 'components/OrderForm';

interface IOrderFormPage {

}

export default function OrderFormPage({ }: IOrderFormPage) {
  return (
    <>
      <Head>
        <title>쥬얼리 | 상품주문</title>
        <meta name="description" content="상품 주문페이지" />
      </Head>
      <MainContainer>
        <OrderForm />
      </MainContainer>
    </>
  );
}
