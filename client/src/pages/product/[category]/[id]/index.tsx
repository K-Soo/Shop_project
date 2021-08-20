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

interface TS {
  category: any;
  id: string
}
export default function ProductDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('props: ', props);
  const { item } = props as { item: IProduct }
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
      <MainContainer >
        <ProductDetail item={[item]} />
      </MainContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: { item: IProduct } }> => {
  const { category, id } = context.query as { category: string, id: string };
  const res = await Get.getProduct(category, id);
  return {
    props: {
      item: res,
    },
  }
}