import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import PAGE from "constants/path";
import { MAIN_MENU } from "constants/header";
import Icon from 'components/Icon/Icon';
// import ReactTooltip from 'react-tooltip';
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useAppContext } from 'context/AppProvider';
import {customCookie} from 'utils';


const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

interface IMenu {
  className?: string;
  ScrollActive: boolean;
  userInfo?: any;
}

const Common = css<{ ScrollActive?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.5px;
  flex:1;
  .right{
  border: 1px solid red;
  }
  .inner{
    display: flex;
    ${({ theme }) => theme.mobile`
      display: none;    
    `}
  }
  .item{
    width: 60px;
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
  }
  .home-link {
    opacity: 0;
    width: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${props =>
    props.ScrollActive &&
    css`
      .home-link {
        color: #fff;
        width: 50px;
        background-color: rgba(55, 55, 55, 0.9);
        transition: width 0.5s ease;
        opacity: 1;
        height: 100%;
      }
    `}
`;

const Left = styled.ul`
  ${Common}
  justify-content: flex-start;
`;

const Right = styled.ul`
  ${Common}
  justify-content: flex-end;
`;

const MyShop = styled.div`
    height: 40px;
    width: 40px;
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      color: #222;
    }
    .Tool{
      font-size: 12px;
      padding: 5px 10px;
    }
`;

const MyCart = styled.div`
  transform: translateY(-200%);
  width: 0px;
  ${({ theme }) => theme.mobile`
    transform: translateY(0%);
    transition: transform 0.5s ease;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      color: #222;
    }
  `}
`;

const SubBanner = styled.div<{ ScrollActive: boolean }>`
  transform: translateY(-200%);
  margin: 0 auto;
  /* flex: 1; */
  opacity: 0;
  border: 1px solid red;
  ${props =>
    props.ScrollActive &&
    css`
      opacity: 1;
      transform: translateY(0%);
      transition: transform 0.5s ease;
      transition: opacity 1s ease;
    `}
  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

const Menu: React.FC<IMenu> = ({ className, ScrollActive }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const router = useRouter();
  const { state: { userInfo } } = useAppContext();

  useEffect(() => {
    setTooltipVisible(true);
  }, [])

  const handleLogOut = () => {
    if(confirm('로그아웃 하시겠습니까?')){
      customCookie.remove('access_token');
      return router.push('/');
    }
  }
 

  return (
    <nav className={className}>
      <div className='container'>
        <Left ScrollActive={ScrollActive}>
          <li className='home-link'>
            <Link href={PAGE.MAIN.path}>
              <a>홈</a>
            </Link>
          </li>
          {MAIN_MENU.left.map(d => (
            <li key={d.value} className='item'>
              <Link href={d.url}>
                <a>{d.label}</a>
              </Link>
            </li>
          ))}
        </Left>
        <SubBanner ScrollActive={ScrollActive}>
          쇼핑몰 입니다
        </SubBanner>
        <Right >
          <div className='inner'>
            {userInfo.userId && (
              <>
                <li className='item'>
                  {`${userInfo.userId}님`}
                </li>
                <li className='item' onClick={handleLogOut}>
                    로그아웃
                </li>
              </>
            )}

            {!userInfo.userId && (
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
              <Link href="/auth/login">
                <a>주문조회</a>
              </Link>
            </li>
            <li className='item'>
              <Link href='/auth/register'>
                <a>마이쇼핑</a>
              </Link>
            </li>
          </div>
          <MyShop >
            <a data-tip data-for='happyFace' data-border={true} >
              <Icon name='human' />
            </a>
            <ReactTooltip id='happyFace' type='light' place="left" effect="solid" className='Tool' >
              마이쇼핑
            </ReactTooltip>
          </MyShop>

          <MyCart >
            <Icon name='cart' />
          </MyCart>
        </Right>
      </div>
    </nav>
  );
};

export default styled(Menu)`
  z-index: 10;
  height: 40px;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  background-color: rgba(255, 255, 255, 0.95);
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
`;
