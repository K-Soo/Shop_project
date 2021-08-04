import React, { useState, useEffect } from "react";
import styled from "styled-components";


interface IHamburgerIcon {
  className?: string;
  open:boolean;
}


const StyledBurger = styled.div<{ open: boolean }>`
  border: 1px solid red;
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    margin: 0 auto;
    width: 30px;
    height: 4px;
    background-color: ${({ open }) => open ? "#ccc" : "#333"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => props.open ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  /* ${({ theme }) => theme.mobile`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  `} */
`;

const HamburgerIcon: React.FC<IHamburgerIcon> = ({ className,open }) => {
  return (
    <StyledBurger className={className} open={open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

export default HamburgerIcon;

