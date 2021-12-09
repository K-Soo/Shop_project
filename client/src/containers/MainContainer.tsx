import React from "react";
import styled from "styled-components";

interface IMainContainer {
  className?: string;
  children?: React.ReactNode;
  global?: any;
}
const S = {
  MainContainer: styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    ${({ theme }) => theme.mobile`
      padding: 0;
    `}
  `,
}

export default function MainContainer(props: IMainContainer) {
 
  return (
    <S.MainContainer >
      {props.children}
    </S.MainContainer>
  );
};

