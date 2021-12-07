import React from "react";
import styled from "styled-components";
import Head from "next/head";
import AdminContainer from 'containers/AdminContainer';
import ProductControllers from 'components/Admin/ProductControllers';
import Create from 'components/Admin/ProductControllers/Create';
import PageTitle from 'components/Common/PageTitle';
import Title from 'components/style/Title';


export default function ProductsCreatePage() {
  return (
    <>
      <Head>
        <title>관리자 | 상품생성</title>
      </Head>
      <AdminContainer>
        <ProductControllers>
          <Title level={1} margin='0 0 30px 0'>상품 추가</Title>
          <Create />
        </ProductControllers>
      </AdminContainer>
    </>
  );
}

