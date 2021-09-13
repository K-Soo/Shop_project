import React from "react";
import styled, { css } from "styled-components";
interface IBanner {
  ScrollActive: boolean;
}

const S = {
  Banner: styled.div<{ ScrollActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-200%);
    opacity: 0;
    ${props => props.ScrollActive && css`
      opacity: 1;
      transform: translateY(0%);
      transition: transform 0.5s ease;
      transition: opacity 1s ease;
    `}
    ${({ theme }) => theme.mobile`
      display: none;
    `}
  `,
}

export default function Banner({ ScrollActive }: IBanner) {
  return (
    <S.Banner ScrollActive={ScrollActive}>
      쇼핑몰 입니다
    </S.Banner>
  );
}
