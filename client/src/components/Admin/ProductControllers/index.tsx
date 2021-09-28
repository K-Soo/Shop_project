import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
// import ProductCreate from 'components/Admin/ProductControllers/ProductCreate';


interface IProductControllers {
  children: React.ReactNode;
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

export default function ProductControllers({ children}: IProductControllers) {
  return (
    <S.ProductControllers>
      {children}
    </S.ProductControllers>
  );
}
