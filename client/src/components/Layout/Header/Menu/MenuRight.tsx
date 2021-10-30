import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from 'components/Icon/Icon';
import { useRouter } from "next/router";
import { useAppContext } from 'context/AppProvider';
import { customCookie } from 'utils';
import Link from "next/link";
import dynamic from "next/dynamic";
import CartIcon from 'components/Common/CartIcon';
// import ReactTooltip from 'react-tooltip';
import MyShopMenuBar from 'components/Common/MyShopMenuBar';
import PAGE from 'constants/path';

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

const S = {
  MenuRight: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    letter-spacing: 0.5px;
    flex:1;
    .inner{
      display: flex;
      .item{
        min-width: 60px;
        border-right: 1px solid #999;
        text-align: center;
        padding: 0 5px;
        color: #323232;
        cursor: pointer;
        &:last-child{
          border: none;
        }
        a {
          display: inline-block;
          width: 100%;
        }
        ${({ theme }) => theme.mobile`
          display: none;    
        `}
      }
    }
    .cart{
      transform: translateY(-200%);
      width: 0px;
      font-size: 0;
      ${({ theme }) => theme.mobile`
      transform: translateY(0%);
      transition: transform 0.5s ease;
      height: 40px;
      width: 40px;
      svg{
        color: #222;
        width: 24px;
        height: 24px;
      }
    `}
    }
  `,
}

const MyShop = styled.i`
    height: 40px;
    width: 40px;
    border-left: 1px solid #e8e8e8;
    border-right: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${({ theme }) => theme.mobile`
      border-right: none;
    `}
    a{
      pointer-events: none;
    }
    svg{
      color: #222;
      pointer-events: none;
    }
    .Tool{
      font-size: 12px;
      padding: 5px 10px;
    }
`;

export default function MenuRight() {
  const router = useRouter();
  const { state: { userInfo } } = useAppContext();
  const App = useAppContext();
  
  const handleLogOut = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      customCookie.remove('access_token');
      localStorage.removeItem('basket');
      localStorage.removeItem('guest');
      return router.push(PAGE.MAIN.path);
    }
  }

  return (
    <S.MenuRight>
      <ul className='inner'>
        {userInfo.userId ? (
          <>
            <li className='item'>
              {`${userInfo.userId}님`}
            </li>
            <li className='item' onClick={handleLogOut}>
              로그아웃
            </li>
          </>
        ) : (
          <>
            <li className='item'>
              <Link href="/auth/login">
                <a>로그인</a>
              </Link>
            </li>
            <li className='item'>
              <Link href="/auth/register">
                <a>회원가입</a>
              </Link>
            </li>
          </>
        )}
        <li className='item'>
          <Link href="/users/history/list">
            <a>주문조회</a>
          </Link>
        </li>
      </ul>

      <MyShop data-name='openMyShop' onClick={App.action.setGlobalToggle}>
        <a data-tip data-for='happyFace' data-border={true} >
          <Icon name='human' />
        </a>
        <ReactTooltip id='happyFace' type='light' place="left" effect="solid" className='Tool' >
          마이쇼핑
        </ReactTooltip>
      </MyShop>
      
      <CartIcon className='cart'/>
      <MyShopMenuBar />
    </S.MenuRight>
  );
}
