import React, { useContext, useState } from "react";
import styled, { css } from 'styled-components';
import { AppContext } from 'pages/_app';
import Image from "next/image";
import DarkBackground from 'components/Common/DarkBackground';
import CloseButton from 'components/style/CloseButton';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import { ACCOUNT_INFO } from '../../../utils/constants/footer';
import Info from 'components/SideMenu/common/Info';
import Copyright from 'components/SideMenu/common/Copyright';
import QuickIcon from 'components/SideMenu/common/QuickIcon';
import DropDown from 'components/SideMenu/common/DropDown';

interface ILeftSide {
  className?: string;
  directionSwap: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const S = {
  LeftSide: styled.nav<{ openSideMenu: boolean, directionSwap: boolean }>`
    border: 2px solid #000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70%;
    padding: 20px;
    visibility: ${props => props.openSideMenu && props.directionSwap ? 'visible' : 'hidden'};
    background-color: #fff;
    ${(props) => props.openSideMenu && props.directionSwap ? css`
      transform: translateX(0%);
      transition: all 0.5s ease;` : css`
      transform: translateX(-100%);
      transition: all 0.5s ease;
    `}
  `,
  Container: styled.div`
    height: 100%;
  `,
  Panel: styled.div`
    font-size: 0;
    border: 1px solid red;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    .swap{
      position: relative;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      font-size: 11px;
      padding: 3px;
      span{
        position: absolute;
        top: 0;
        top: 50%;
        transform: translateY(-50%);
        /* left: 50%; */
        right: 50%;
        display: inline-block;
        border: 1px solid #000;
        width: 50px;
        height: 15px;
        border-radius: 10px;
        /* transform: translateX(100%) */
      }
      button{
        color: #fff;
        all: unset;
        width: 50px;
        height: 15px;
        line-height: 17px;
        text-align: center;
      }
    }
  `,
  Banner: styled.div`
  img{
  }
  `,
  Top: styled.div`
    display: flex;
    justify-content: space-between;
    button{
      width: 48%;
    }
  `,
  Copyright: styled.div`
  font-size: 11px;
`,
}


const LeftSide: React.FC<ILeftSide> = ({ className, directionSwap, onClick }) => {
  const global = useContext(AppContext);

  return (
    <S.LeftSide className={className} openSideMenu={global.state.openSideMenu} directionSwap={directionSwap}>
      <S.Container>
        <S.Panel>
          <div className='swap'>
            <span className='swap-slider' />
            <button onClick={onClick}>SHOP</button>
            <button onClick={onClick}>CART</button>
          </div>
          <CloseButton onClick={global.action.setToggle} />
        </S.Panel>
        <S.Banner>
          {/* <img src="http://placehold.it/250x100" alt='1' /> */}
          {/* <Image src="http://placehold.it" width={100} height={200}/> */}
        </S.Banner>
        <S.Top>
          <Button login height='35px' fontSize='12px'>로그인</Button>
          <Button height='25' fontSize='12px'>회원가입</Button>
        </S.Top>
        <QuickIcon />
        <DropDown />
        <Info />
        <Copyright />
      </S.Container>
    </S.LeftSide>
  )
};

export default styled(LeftSide)`

`;