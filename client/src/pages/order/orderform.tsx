import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import OrderForm from 'components/OrderForm';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Get } from "api";
import cookies from 'next-cookies';
import OrderProvider from 'context/OrderProvider';
interface IOrderFormPage {

}

export default function OrderFormPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log('props: ', props);
  return (
    <>
      <Head>
        <title>쥬얼리 | 상품주문</title>
        <meta name="description" content="상품 주문페이지" />
      </Head>
      <OrderProvider value={props}>
        <MainContainer>
          <OrderForm />
        </MainContainer>
      </OrderProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, res } = context;
  // console.log('res: ', res);
  // console.log('req: ', req.headers);

  const cookie = req?.headers.cookie ?? '';
  console.log('cookie: ', cookie);

  // if(ctx.req){
  //   console.log('서버사이드');
  // }else{
  //   console.log('클라이언트 사이드');
  // }

  const { category, id } = context.query as { category: string, id: string };
  const parse = context.req ? cookies(context) : '';

  if (!cookie) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      }
    }
  }
  return {
    props: {
      parse
    },
  }

  try {
    const res = await Get.getProduct(category, id);

  } catch (error) {
    // console.log('error: ', error);
    throw error;
  }
};
