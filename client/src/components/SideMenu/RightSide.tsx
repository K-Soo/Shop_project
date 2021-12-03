/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { css } from 'styled-components';
import { useAppContext } from 'context/AppProvider';
import TitleLine from 'components/SideMenu/common/TitleLine';
import Info from 'components/SideMenu/common/Info';
import Copyright from 'components/SideMenu/common/Copyright';
import QuickIcon from 'components/SideMenu/common/QuickIcon';
import PointAndCoupon from 'components/SideMenu/common/PointAndCoupon';
import { QUICK_ICON_RIGHT } from 'constants/sideMenu';

interface IRightSide {
  directionSwap: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}
const S = {
  RightSide: styled.nav<{ openSideMenu: boolean, directionSwap: boolean }>`
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    width: 260px;
    z-index: 9999;
    overflow-y: scroll;
    visibility: ${props => props.openSideMenu && props.directionSwap === false ? 'visible' : 'hidden'};
    background-color: #fff;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .side-footer{
      margin-top: 15px;
    }
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
  ImageBanner: styled.div`
    font-size: 0;
    margin-bottom: 15px;
    img{
      width: 100%;
      object-fit: cover;
    }
  `,
  PointList: styled.ul`
    font-size: 13px;
    .item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 15px;
      &:last-child{
        padding-bottom: 0px;
      }
      &__title{
        color: #333;
      }
      &__value{
        background: #f5f5f5;
        padding: 3px 10px;
        border-radius: 5px;
        color: #323232;
        &::after{
          content: '원';
        }
      }
      .coupon{
        &::after{
          content: '개';
        }
      }
    }
  `,
}
export default function RightSide({ directionSwap, onClick }: IRightSide) {
  const { state } = useAppContext();

  return (
    <S.RightSide openSideMenu={state.openSideMenu} directionSwap={directionSwap}>
      <S.Container>
        <div>
          <S.Panel directionSwap={directionSwap} openSideMenu={state.openSideMenu}>
            <ul className='wrapper'>
              <span>SHOP</span>
              <li onClick={onClick}>SHOP</li>
              <li >CART</li>
            </ul>
          </S.Panel>

          <S.ImageBanner>
            <img className='main-logo' src="/images/41p61tShGfL._AC_.jpg" alt='side_left_main_logo' />
          </S.ImageBanner>

          <TitleLine text='MY SHOPPING' />
          <QuickIcon lists={QUICK_ICON_RIGHT} />

          <TitleLine text='POINT / COUPON' />
          <PointAndCoupon />
        </div>

        <div className='side-footer'>
          <Info />
          <Copyright />
        </div>

      </S.Container>
    </S.RightSide>
  )
};

