import React from "react";
import Head from "next/head";
import { NextRouter, useRouter } from 'next/router';
import MainContainer from 'containers/MainContainer';
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