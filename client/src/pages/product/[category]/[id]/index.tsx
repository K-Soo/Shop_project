import React from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import { useQuery, UseQueryResult } from 'react-query';
import MainContainer from 'containers/MainContainer';
import Product from 'components/Product';
import Loading from 'components/Common/Loading';
import { IProduct } from 'interfaces/IProduct';
import ProductDetail from 'components/ProductDetail';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Get } from "api";
import { AppContext, AppInitialProps, AppProps } from "next/app"
import BasketProvider from 'context/BasketProvider';
import cookies from 'next-cookies'

export default function ProductDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { item ,cookies} = props;
  console.log('cookies: ', cookies);
  console.log('ProductDetailPage: ', item);
  const router: NextRouter = useRouter();
  const { category, id } = router.query as { category: string, id: string };



  // const { data, isLoading, isSuccess, isError, status, error } = useQuery<IProduct>(['productDetail', category, id], async () => await Get.getProduct(category, id), {
  //   retry: 0,
  // });

  // console.log('data: ', data);

  // const [item, setItem] = useState<IProduct[] | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get(URL);
  //       setItem(result.data);
  //       console.log('result: ', result);
  //     } catch (error) {
  //       console.log('error: ', error);
  //     }
  //   }
  //   fetchData()
  // }, [])

  // if (isLoading) {
  //   // return <Loading isLoading={isLoading} text='loading' />
  //   return <h1>loading</h1>
  // }

  // if (isError) {
  //   return <h1>error..</h1>
  // }

  return (
    <>
      <Head>
        <title>쥬얼리 | {item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      <BasketProvider value={props}>
        <MainContainer >
          <ProductDetail item={[item]} />
        </MainContainer>
      </BasketProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: { item: IProduct ,cookies?:any} }> => {
  const { category, id } = context.query as { category: string, id: string };
  const parse = context.req ? cookies(context) : '';
  // console.log('xxxxx: ', context.req.headers);
  try {
    const res = await Get.getProductDetail(category, id);
    return {
      props: {
        item: res,
        cookies: parse,
      },
    }
  } catch (error) {
    // console.log('error: ', error);
    throw error;
  }
};