import React, { useState,useContext } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { NAV_MENU } from "constants/header";
import Icon from 'components/Icon/Icon';
import NavSearchBar from 'components/Layout/Header/NavSearchBar';
import HamburgerIcon from 'components/Common/HamburgerIcon';
import SideMenu from 'components/SideMenu';
import { AppContext } from 'pages/_app';

interface INav {
  className?: string;
  ScrollActive: boolean;
}

const S = {
  wrapper: styled.nav<{ ScrollActive: boolean }>`
    height: 50px;
    color: #222;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #4c4c4c;
    border-top-color: rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid #e8e8e8;
    border-bottom-color: rgba(0, 0, 0, 0.09);
    ${props =>
      props.ScrollActive &&
      css`
      position: fixed;
      top: 40px;
      border-top: none;
    `}
    ${({ theme }) => theme.mobile`
      height: auto;
    `}
  `,
  container: styled.div`
    position:relative;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
  `,
  ItemBox: styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    ${({ theme }) => theme.mobile`
      height: auto;
      flex-wrap: wrap;
      ul:first-child{
        order: 2;
      }
    `}
  `,
  SearchGroup: styled.ul<{ toggle: boolean }>`
    height: 50px;
    width:50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${props => props.toggle && css`
      justify-content: flex-end;
    `}
    ${({ theme }) => theme.mobile`
      flex-grow: 1;
      height: auto;
      width:100%;
      height: 40px;
    `}
    .hamburger-btn{
      display: none;
      width: 40px;
      height: 100%;
      border-width: 0px 1px 0px 0px;
      align-items: center;
      ${({ theme }) => theme.mobile`
        display: ${({ toggle }: any) => toggle ? 'none' : 'flex'}
      `}
    }
    .search-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50px;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        &:hover{
          background-color: #e8e8e8;
        }
        svg{
          width: 18px;
          color: #222;
        }
      }
      ${({ theme }) => theme.mobile`
        width: 40px;
        border: solid #e8e8e8;
        border-width: 0px 0px 0px 1px;
        ${(props: any) => props.toggle && css`
          display: none;
        `}
        span{
          height: 32px;
          width: 32px;
        }
        svg{
          width: 15px;
        }
      `}
    }
  `,
  NavGroup: styled.ul`
    height:100%;
    display:flex;
    align-items: center;
    flex-grow: 1;
    ${({ theme }) => theme.mobile`
      flex-wrap: wrap;
    `}
  `,
  Item: styled.li`
    flex-grow: 1;
    display: inline-block;
    text-align: center;
    font-size: 13px;
    ${({ theme }) => theme.mobile`
      flex-basis:40%;
      padding: 5px;
      border: 1px solid #e8e8e8;
    `}
    a {
      display: inline-block;
      padding: 0 10px;
      width: 100%;
      vertical-align: bottom;
      &:hover {
        color: red;
      }
    }
  `,
}

const Nav: React.FC<INav> = ({ className, ScrollActive }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const global = useContext(AppContext);

  return (
    <S.wrapper className={className} ScrollActive={ScrollActive} >
      <S.container >
        <S.ItemBox >
          <S.NavGroup className='nav-menu'>
            {NAV_MENU.map(d => (
              <S.Item key={d.label}>
                <Link href={d.url}>
                  <a>{d.label}</a>
                </Link>
              </S.Item>
            ))}
          </S.NavGroup>

          <S.SearchGroup className='search-menu' toggle={toggle} >
            <li className='hamburger-btn' onClick={global.action.setToggleSideMenu}>
            <HamburgerIcon toggle={global.state.openSideMenu}/>
            </li>
            <NavSearchBar handleToggle={() => setToggle(!toggle)} toggle={toggle} />
            <li className='search-btn' >
              <span onClick={() => setToggle(!toggle)}>
                {toggle ? <Icon name='close' /> : <Icon name='search' />}
              </span>
            </li>
          </S.SearchGroup>
        </S.ItemBox>
      </S.container>
    </S.wrapper>
  );
};

export default Nav;
