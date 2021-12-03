/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { css } from 'styled-components';
import Button from 'components/style/Button';
import Info from 'components/SideMenu/common/Info';
import Copyright from 'components/SideMenu/common/Copyright';
import QuickIcon from 'components/SideMenu/common/QuickIcon';
import { useRouter } from 'next/router';
import { useAppContext } from 'context/AppProvider';
import Category from 'components/SideMenu/common/Category';
import { QUICK_ICON_LEFT } from 'constants/sideMenu';
import TitleLine from 'components/SideMenu/common/TitleLine';
import { customCookie } from 'utils';
import PAGE from 'constants/path';

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
    width: 260px;
    padding: 20px;
    visibility: ${props => props.openSideMenu && props.directionSwap ? 'visible' : 'hidden'};
    z-index: 9999;
    overflow-y: auto;
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
    .side-footer{
      margin-top: 15px;
    }
  `,
  ImageBanner: styled.div`
    font-size: 0;
    img{
      width: 100%;
      object-fit: cover;
    }
  `,
  Top: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    button{
      width: 48%;
      padding: 0;
      height: 35px;
      font-size: 12px;
      font-weight: normal;
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
  Tap: styled.div`
    margin-top: 15px;

  `,
}

export default function LeftSide({ directionSwap, onClick }: ILeftSide) {
  const { action, state } = useAppContext();
  const router = useRouter();

  const handleRouter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const { name } = e.currentTarget
    action.setToggleSideMenu();
    router.push(`/auth/${name}`);
  }

  const handleLogOut = () => {
    customCookie.remove('access_token');
    localStorage.removeItem('basket');
    localStorage.removeItem('guest');
    return router.push(PAGE.MAIN.path);
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

          <S.ImageBanner>
            <img className='main-logo' src="/images/single-first.jpeg" alt='side_left_main_logo' />
          </S.ImageBanner>

          <S.Top>
            {state.userInfo.idx ? (
              <>
                <Button black name='login' onClick={() => router.push('/users')}>
                  마이쇼핑
                </Button>
                <Button white name='register' onClick={handleLogOut}>
                  로그아웃
                </Button>
              </>
            ) : (
              <>
                <Button black name='login' onClick={handleRouter}>
                  로그인
                </Button>
                <Button white name='register' onClick={handleRouter}>
                  회원가입
                </Button>
              </>
            )}
          </S.Top>

          <TitleLine text='MY SHOPPING' />
          <QuickIcon lists={QUICK_ICON_LEFT} />

          <S.Tap >
            <TitleLine text='PRODUCT' />
            <Category />
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