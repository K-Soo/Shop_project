import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from 'pages/_app';

interface ISideMenuIcon {
  className?: string;
}


const Wrapper = styled.span<{ openSideMenu: boolean }>`
  border: 1px solid red;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  .line {
    margin: 0 auto;
    width: 30px;
    height: 4px;
    background-color: ${({ openSideMenu }) => openSideMenu ? "#ccc" : "#333"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ openSideMenu }) => openSideMenu ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ openSideMenu }) => (openSideMenu ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ openSideMenu }) => (openSideMenu ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ openSideMenu }) => (openSideMenu ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const SideMenuIcon: React.FC<ISideMenuIcon> = ({ className }) => {
  const global = useContext(AppContext);

  return (
    <>
      <Wrapper className={className} openSideMenu={global.state.openSideMenu}>
        <span className='line' />
        <span className='line' />
        <span className='line' />
      </Wrapper>
    </>
  )
};

export default SideMenuIcon;

