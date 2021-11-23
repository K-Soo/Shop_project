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
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import { CategoryEnum } from 'constants/product';

export default function ProductDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router: NextRouter = useRouter();
  const { item ,cookies} = props;
  const { category } = router.query as { category: string };

  return (
    <>
      <Head>
        <title>쥬얼리 | {item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      <BasketProvider value={props}>
        <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, {path: `/product/${category}`,tag: `${CategoryEnum[category]}`}].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
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
    throw error;
  }
};