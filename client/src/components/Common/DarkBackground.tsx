import React from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon/Icon';
import { useAppContext } from 'context/AppProvider';

interface IDarkBackground {
  className?: string;
  children: React.ReactNode;
  directionSwap: boolean;
}

const S = {
  DarkBackground: styled.div<{ active: boolean}>`
  visibility:hidden;
  position: fixed; 
  top: 0;
  right: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: 99;
  ${props =>
      props.active &&
      css`
      visibility:visible;
  `}
  `,
  Close: styled.i<{ directionSwap: boolean, openSideMenu: boolean }>`
    display: block;
    position: fixed; 
    z-index: 999999;
    font-size: 0;
    cursor: pointer;
    top: 15px;
    ${(props) => props.openSideMenu === false && props.directionSwap  && css`
    // init
      right: -100px;
    `}
    ${(props) => props.openSideMenu  && props.directionSwap  && css`
      right: 5px;
      transform: translateX(-50%);
      transition: all 0.5s ease;
    `}
    ${(props) => props.openSideMenu  && props.directionSwap === false && css`
      left: 5px;
      transform: translateX(50%);
      transition: all 0.5s ease;
    `}
    visibility: ${props => props.openSideMenu ? 'visible' : 'hidden'};
    svg{
      color: #fff;
      width: 35px;
      height: 35px;
    }
  `,
}


export default function DarkBackground({ children, directionSwap }: IDarkBackground) {
  const { action, state } = useAppContext();

  const handleClose = (e:React.MouseEvent<HTMLDivElement>) => {
    const {className} = e.target as HTMLDivElement
    const str = className.split('-');
    if(str[0] === 'DarkBackground'){
      action.setToggleSideMenu();
    }
  }

  return (
    <S.DarkBackground className='dark-background' active={state.openSideMenu} onClick={handleClose} >
      <S.Close 
        onClick={action.setToggleSideMenu} 
        directionSwap={directionSwap} 
        openSideMenu={state.openSideMenu}
      >
        <Icon name='close' />
      </S.Close>
      {children}
    </S.DarkBackground>
  );
}
