import React from "react";
import styled from "styled-components";
import Head from "next/head";
import AdminContainer from 'containers/AdminContainer';
import ProductControllers from 'components/Admin/ProductControllers';
import Create from 'components/Admin/ProductControllers/Create';


export default function ProductsCreatePage() {
  return (
    <>
      <Head>
        <title>관리자 | 상품생성</title>
      </Head>
      <AdminContainer>
        <ProductControllers>
          <Create />
        </ProductControllers>
      </AdminContainer>
    </>
  );
}

