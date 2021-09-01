import React from "react";
import styled, { css } from "styled-components";
import HamburgerIcon from 'components/Common/HamburgerIcon';
import NavSearchBar from 'components/Layout/Header/NavSearchBar';
import Icon from 'components/Icon/Icon';
import { useAppContext } from 'context/AppProvider';
import Link from "next/link";
import CartIcon from 'components/Common/CartIcon';

const S = {
  SearchGroup: styled.ul<{ toggle: boolean }>`
    height: 100%;
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
      border: solid #e8e8e8;
      border-width: 0px 1px 0px 0px;
      align-items: center;
      justify-content: center;
      ${({ theme }) => theme.mobile`
        display: ${({ toggle }: any) => toggle ? 'none' : 'flex'}
      `}
    }
    .inner-group{
      height: 100%;
      display: flex;
      align-items: center;
      .cartIcon{
        ${({ theme }) => theme.mobile`
          display: none;
        `};
      }
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

export default function SearchGroup() {
  const { action, state } = useAppContext();

  return (
    <S.SearchGroup toggle={state.openSearch} >
      <li className='hamburger-btn' onClick={action.setToggleSideMenu}>
        <HamburgerIcon toggle={state.openSideMenu} onClick={action.setToggleSubMenu} />
      </li>
      <NavSearchBar />
      <div className='inner-group'>
        <li className='search-btn' >
          <span onClick={action.setToggleSearch}>
            {state.openSearch ? <Icon name='close' /> : <Icon name='search' />}
          </span>
        </li>
        <CartIcon className='cartIcon'/>
      </div>
    </S.SearchGroup>
  );
}
