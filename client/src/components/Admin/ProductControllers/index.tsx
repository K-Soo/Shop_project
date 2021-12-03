import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
// import ProductCreate from 'components/Admin/ProductControllers/ProductCreate';
import { useAdminContext } from 'context/AdminProvider';


interface IProductControllers {
  children: React.ReactNode;
}

const S = {
  ProductControllers: styled.div<{ isWhite: boolean }>`
    height: 100%;
    width: 100%;
    background-color: ${props => props.isWhite ? '#FFF' : '#1F2A40'};
    border-radius: 5px;
    padding: 20px;
  `,
}

export default function ProductControllers({ children}: IProductControllers) {
  const { state } = useAdminContext();

  return (
    <S.ProductControllers isWhite={state.isWhite}>
      {children}
    </S.ProductControllers>
  );
}
