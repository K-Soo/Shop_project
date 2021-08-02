import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import PAGE from "../../../../utils/path";
import { MAIN_MENU } from "../../../../utils/constants/header";
import Icon from 'components/Icon/Icon';

interface IMenu {
  className?: string;
  ScrollActive: boolean;
}


const Lists = styled.ul<{ ScrollActive: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.5px;
  .inner{
    display: flex;
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

const MyShop = styled.div`
    width:50px;
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      color: #222;
    }
`;

const Menu: React.FC<IMenu> = ({ className, ScrollActive }) => {
  return (
    <div className={className}>
      <div className='container'>
        <Lists className='lists' ScrollActive={ScrollActive}>
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
        </Lists>
        <Lists className='lists' ScrollActive={ScrollActive}>
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
            <Icon name='human' />
          </MyShop>
        </Lists>
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
