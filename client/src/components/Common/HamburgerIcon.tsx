import React from "react";
import styled from "styled-components";

interface IHamburgerIcon {
  toggle: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const S = {
  HamburgerIcon: styled.div<{ toggle: boolean }>`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    .line {
      margin: 0 auto;
      width: 25px;
      height: 3px;
      background-color: ${({ toggle }) => toggle ? "#ccc" : "#333"};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
      &:nth-child(1) {
        transform: ${({ toggle }) => toggle ? "rotate(45deg)" : "rotate(0)"};
      }
      &:nth-child(2) {
        transform: ${({ toggle }) => (toggle ? "translateX(100%)" : "translateX(0)")};
        opacity: ${({ toggle }) => (toggle ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ toggle }) => (toggle ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  `,
}

export default function HamburgerIcon({ toggle, onClick }: IHamburgerIcon) {
  return (
    <S.HamburgerIcon toggle={toggle} onClick={onClick}>
      <span className='line' />
      <span className='line' />
      <span className='line' />
    </S.HamburgerIcon>
  );
}
