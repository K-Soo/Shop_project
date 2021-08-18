import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { NextRouter, useRouter } from 'next/router';
import { NAV_MENU } from "constants/header";
import Icon from 'components/Icon/Icon';
import NavSearchBar from 'components/Layout/Header/NavSearchBar';
import HamburgerIcon from 'components/Common/HamburgerIcon';
import { useAppContext } from 'context/AppProvider';

interface INav {
  className?: string;
  ScrollActive: boolean;
}

const S = {
  Nav: styled.nav<{ ScrollActive: boolean }>`
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
  CategoryGroup: styled.ul<{ pathname: string }>`
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;
    ${({ theme }) => theme.mobile`
      display: ${(props: any) => props.pathname === '/' ? 'flex' : 'none'};
      flex-wrap: wrap;
    `}
  `,
  Item: styled.li`
    flex-grow: 1;
    display: inline-block;
    text-align: center;
    font-size: 13px;
    height: 100%;

    a {
      display: inline-block;
      padding: 0 10px;
      width: 100%;
      line-height: 48px;
      height: 100%;
      /* vertical-align: bottom; */
      &[data-active=true] {
        color: #000;
        border-bottom: solid 2px #000;
      }
      &:hover {
        color: #000;
      }
      ${({ theme }) => theme.mobile`
        flex-basis:40%;
        padding: 5px;
        border: 1px solid #e8e8e8;
      `}
    }
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

}

const Nav: React.FC<INav> = ({ className, ScrollActive }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [dataSetName, setDatasetName] = useState<string>('');
  const router: NextRouter = useRouter();
  const { action, state } = useAppContext();

  const handleItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { name } = (e.target as HTMLAnchorElement).dataset;
    setDatasetName(name);
  }

  return (
    <S.Nav className={className} ScrollActive={ScrollActive} >
      <S.container >
        <S.ItemBox >
          <S.CategoryGroup pathname={router.pathname}>
            {NAV_MENU.map(d => (
              <S.Item key={d.label} >
                <Link href={d.url} >
                  <a onClick={handleItem} data-name={d.label} data-active={d.label === dataSetName}>{d.label}</a>
                </Link>
              </S.Item>
            ))}
          </S.CategoryGroup>

          <S.SearchGroup toggle={toggle} >
            <li className='hamburger-btn' onClick={action.setToggleSideMenu}>
              <HamburgerIcon toggle={state.openSideMenu} />
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
    </S.Nav>
  );
};

export default Nav;
