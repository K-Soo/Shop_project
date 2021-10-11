import React, { useContext, useState } from "react";
import styled, { css } from 'styled-components';
import Image from "next/image";
import DarkBackground from 'components/Common/DarkBackground';
import CloseButton from 'components/style/CloseButton';
import Button from 'components/style/Button';
import Icon from 'components/Icon/Icon';
import { ACCOUNT_INFO } from 'constants/footer';
import Info from 'components/SideMenu/common/Info';
import Copyright from 'components/SideMenu/common/Copyright';
import QuickIcon from 'components/SideMenu/common/QuickIcon';
import DropDown from 'components/SideMenu/common/DropDown';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';
import Category from 'components/SideMenu/common/Category';

interface ILeftSide {
  directionSwap: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const S = {
  LeftSide: styled.nav<{ openSideMenu: boolean, directionSwap: boolean }>`
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    padding: 20px;
    visibility: ${props => props.openSideMenu && props.directionSwap ? 'visible' : 'hidden'};
    z-index: 9999;
    ${(props) => props.openSideMenu && props.directionSwap ? css`
      transform: translateX(0%);
      transition: all 0.5s ease;` : css`
      transform: translateX(-100%);
      transition: all 0.5s ease;
    `}
  `,
  Container: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-Y: scroll;
    .side-footer{
      margin-top: 15px;
    }
  `,
  Banner: styled.div`
    font-size: 0;
    /* margin-bottom: 15px; */
    border: 1px solid red;
    img{
      width: 100%;
    }
  `,
  Top: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    button{
      width: 48%;
      padding: 0;
    }
    a{
      display: inline-block;
      height: 100%;
      line-height: 35px;
      width: 100%;
      flex: 1;
    }
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
      li:nth-child(3){
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
  Tap: styled.div<{ text: string }>`
    margin-top: 15px;
    .tap-list{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      li{
      text-align: center;
      flex-basis: 50%;
      font-size: 14px;
      padding: 5px 0;
      font-size: 13px;
      cursor: pointer;
    }
    .product{
      border: solid #666;
      border-width: ${props => props.text === 'product' ? '1px 1px 0 1px' : '0 0 1px 0'};
    }
    .interest{
      border: solid #666;
      border-width: ${props => props.text === 'interest' ? '1px 1px 0 1px' : '0 0 1px 0'};
    }
    }
  `,
}

type TTap = 'product' | 'interest'
export default function LeftSide({ directionSwap, onClick }: ILeftSide) {
  const { action, state } = useAppContext();
  const router = useRouter();
  const [text, setText] = useState<TTap>('product');
  console.log('text: ', text);

  const handleRouter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const { name } = e.currentTarget
    action.setToggleSideMenu();
    router.push(`/auth/${name}`);
  }

  return (
    <S.LeftSide 
      openSideMenu={state.openSideMenu} 
      directionSwap={directionSwap}
    >
      <S.Container>
        <div>
          <S.Panel directionSwap={directionSwap} openSideMenu={state.openSideMenu}>
            <ul className='wrapper'>
              <span>SHOP</span>
              <li>SHOP</li>
              <li onClick={onClick}>CART</li>
            </ul>
          </S.Panel>

          <S.Banner>
            <Image className='main-logo' src="/images/main_logo.jpeg" width={80} height={80} alt='main_logo' />
          </S.Banner>

          <S.Top>
            <Button login height='35px' fontSize='12px' name='login' onClick={handleRouter}>
              로그인
            </Button>
            <Button height='35px' fontSize='12px' name='register' onClick={handleRouter}>
              회원가입
            </Button>
          </S.Top>

          <QuickIcon />

          <S.Tap text={text}>
            <ul className='tap-list'>
              <li className='product' onClick={(e: React.MouseEventHandler<HTMLLIElement>) => setText(e.target.className)}>상품</li>
              <li className='interest' onClick={(e: React.MouseEventHandler<HTMLLIElement>) => setText(e.target.className)}>관심상품</li>
            </ul>

            <div className='tap-data'>
              {text === 'product' && <Category />}
            </div>
          </S.Tap>
        </div>

        <div className='side-footer'>
          <Info />
          <Copyright />
        </div>
      </S.Container>
    </S.LeftSide>
  )
};