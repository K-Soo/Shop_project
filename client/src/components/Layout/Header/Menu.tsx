import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import PAGE from "../../../../utils/path";
import { MAIN_MENU } from "../../../../utils/constants/header";
import Icon from 'components/Icon/Icon';
import ReactTooltip from 'react-tooltip';

interface IMenu {
  className?: string;
  ScrollActive: boolean;
}

const Common = css<{ ScrollActive?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.5px;
  /* border: 1px solid red; */
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
    width: 50px;
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    height: 40px;
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
    width:50px;
    height:40px;
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
  return (
    <div className={className}>
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
            {MAIN_MENU.right.map(d => (
              <li key={d.value} className='item'>
                <Link href={d.url}>
                  <a>{d.label}</a>
                </Link>
              </li>
            ))}
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
    </div>
  );
};

export default styled(Menu)`
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
