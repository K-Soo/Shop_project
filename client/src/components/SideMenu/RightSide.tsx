import React from "react";
import styled, { css } from 'styled-components';
import { useAppContext } from 'context/AppProvider';
import DarkBackground from 'components/Common/DarkBackground';
import CloseButton from 'components/style/CloseButton';

interface IRightSide {
  className?: string;
  directionSwap: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}
const S = {
  RightSide: styled.nav<{ openSideMenu: boolean, directionSwap: boolean }>`
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    width: 280px;
    z-index: 9999;
    visibility: ${props => props.openSideMenu && props.directionSwap === false ? 'visible' : 'hidden'};
    background-color: #fff;
    /* transform: translateX(-100%); */
    padding: 20px;
    ${props => props.openSideMenu && props.directionSwap === false ? css`
      transform: translateX(0%);
      transition: all 0.5s ease;` : css`
      transform: translateX(200%);
      transition: all 0.5s ease;
    `}
  `,
  Container: styled.div`
    height: 100%;
  `,
  directionSwap: styled.div`
    width: 100px;
    border: 1px solid red;
    height:30px;
    border-radius: 10px;
  `,
  Panel: styled.div<{ directionSwap: boolean, openSideMenu: boolean }>`
    margin-bottom: 15px;
    .wrapper{
      border: 1px solid #eaeaea;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      padding: 3px;
      position: relative;
      width: 100px;
      li{
        text-align: center;
        width: 50px;
        color: #555;
        font-size: 14px;
      }
      li:nth-child(2){
        cursor: pointer;
      }
      span{
        position: absolute;
        background-color: #444;
        border-radius: 10px;
        padding: 2px 0;
        top: 2px;
        right: 3px;
        width: 46px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: #fff;
        cursor: default;
        ${({ openSideMenu, directionSwap }) => openSideMenu && directionSwap && css`
        transform: translateX(-100%);
        `};
        transition: all 0.7s ease-in;
      }
    }
  `,
}
const RightSide: React.FC<IRightSide> = ({ className, directionSwap, onClick }) => {
  const { action, state } = useAppContext();

  return (
    <S.RightSide className={className} openSideMenu={state.openSideMenu} directionSwap={directionSwap}>
      <S.Container>
        <S.Panel directionSwap={directionSwap} openSideMenu={state.openSideMenu}>
          <ul className='wrapper'>
            <span>SHOP</span>
            <li onClick={onClick}>SHOP</li>
            <li >CART</li>
          </ul>
        </S.Panel>
      </S.Container>
    </S.RightSide>
  )
};


export default styled(RightSide)`

`;