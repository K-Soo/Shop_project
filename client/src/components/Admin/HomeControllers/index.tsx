import React from "react";
import styled from "styled-components";

interface IHomeControllers {
  children: React.ReactNode;
}

const S = {
  HomeControllers: styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    border: 3px solid red;
  `,
}

export default function HomeControllers({ children }: IHomeControllers) {
  return (
    <S.HomeControllers>
      {children}
    </S.HomeControllers>
  );
}
