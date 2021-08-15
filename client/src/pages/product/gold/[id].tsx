import Head from "next/head";
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Axios from 'axios';
import MainContainer from 'containers/MainContainer';
import ProductDetail from 'components/ProductDetail';

export default function Gold({ item }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      <MainContainer >
        <ProductDetail item={[item]}/>
      </MainContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const res = await Axios.get(URL);
  return {
    props: {
      item: res.data,
    }
  }
}
