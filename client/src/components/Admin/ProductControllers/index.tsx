import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import ProductCreate from 'components/Admin/ProductControllers/ProductCreate';


interface IProductControllers {

}

const S = {
  ProductControllers: styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  `,

}

export default function ProductControllers({ }: IProductControllers) {
  return (
    <S.ProductControllers>
      {/* <Title level={1}>
        제품생성
      </Title> */}
      <ProductCreate />
    </S.ProductControllers>
  );
}
