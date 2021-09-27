import React from "react";
import styled from "styled-components";

interface IHamburgerIcon {
  dataName?:string;
  toggle: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const S = {
  HamburgerIcon: styled.div<{ toggle: boolean }>`
    border: 1px solid red;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    overflow: hidden;
    .line {
      pointer-events: none;
      margin: 0 auto;
      width: 25px;
      height: 3px;
      background-color: ${({ toggle }) => toggle ? "#ccc" : "#333"};
      border-radius: 10px;
      transform-origin: 1px;
      overflow: hidden;
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

export default function HamburgerIcon({ className, toggle, onClick,dataName }: IHamburgerIcon) {

  return (
    <S.HamburgerIcon
      className={className}
      toggle={toggle}
      onClick={onClick}
      data-name={dataName}
    >
      <span className='line' />
      <span className='line' />
      <span className='line' />
    </S.HamburgerIcon>
  );
}
