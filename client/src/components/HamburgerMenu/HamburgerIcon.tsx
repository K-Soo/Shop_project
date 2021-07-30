import React from "react";
import styled from "styled-components";

interface IHamburgerIcon {
  className?: string;
  open?: boolean;
}

const HamburgerIcon: React.FC<IHamburgerIcon> = ({ className, open }) => {
  return <div className={className}>HamburgerIcon</div>;
};

export default styled(HamburgerIcon)`
  width: 2rem;
  height: 30px;
  position: fixed;
  top: 15px;
  right: 10px;
  z-index: 99;
  display: none;
  div {
    width: 30px;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  ${({ theme }) => theme.Tablet`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  `}
`;
