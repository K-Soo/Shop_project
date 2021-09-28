import React from "react";
import Head from "next/head";
import AdminContainer from 'containers/AdminContainer';
import ProductControllers from 'components/Admin/ProductControllers';
import List from 'components/Admin/ProductControllers/List';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Get } from "api";


export default function ProductsListPage(props: InferGetServerSidePropsType<typeof getServerSideProps>){
  return (
    <>
      <Head>
        <title>관리자 | 상품리스트</title>
      </Head>
      <AdminContainer>
        <ProductControllers>
          <List item={props.item}/>
        </ProductControllers>
      </AdminContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await Get.getAllProduct();
    return {
      props: {
        item: res,
      },
    }
  } catch (error) {
    throw error;
  }

}