import React from "react";
import styled from "styled-components";

interface IHamburgerIcon {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  toggleSubMenu: boolean;
}

const S = {
  HamburgerIcon: styled.div<{ toggleSubMenu: boolean }>`
    position: relative;
    width: 30px;
    height: 30px;
    border: 1px solid red;
    &::before{
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 13px;
      background: #e8e8e8;
      margin: -7px 0 0 -13px;
    }
    ${({ theme }) => theme.mobile`
        display: none;
    `}
  `,
}

export default function HamburgerIcon({ onClick, toggleSubMenu }: IHamburgerIcon) {
  return (
    <S.HamburgerIcon onClick={onClick} toggleSubMenu={toggleSubMenu}>
      icon
    </S.HamburgerIcon>
  );
}
