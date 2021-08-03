import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { NAV_MENU } from "../../../../utils/constants/header";
import Icon from 'components/Icon/Icon';
import NavSearchBar from 'components/Layout/Header/NavSearchBar';
interface INav {
  className?: string;
  ScrollActive: boolean;
}

const S = {
  wrapper: styled.div<{ ScrollActive: boolean }>`
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
  `,
  container: styled.div`
    position:relative;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
  `,
  ItemBox: styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  `,
  Item: styled.li`
    display: inline-block;
    text-align: center;
    font-size: 13px;
    flex: 1;
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
  Search: styled.li<{ toggle: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width:50px;
    font-size: 0;
    span{
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      cursor: pointer;
      &:hover{
        background-color: #EAEAEA;
      }
    }
    svg{
      color: #222;
    }
  `,
}

const Nav: React.FC<INav> = ({ className, ScrollActive }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log('toggle: ', toggle);

  return (
    <S.wrapper className={className} ScrollActive={ScrollActive} >
      <S.container >
        <S.ItemBox >
          {NAV_MENU.map(d => (
            <S.Item key={d.label}>
              <Link href={d.url}>
                <a>{d.label}</a>
              </Link>
            </S.Item>
          ))}
          <S.Search toggle={toggle}>
            <span onClick={() => setToggle(!toggle)}>
              {toggle ? <Icon name='close' /> : <Icon name='search' />}
            </span>
          </S.Search>
        </S.ItemBox>
      <NavSearchBar toggle={toggle}/>

      </S.container>
    </S.wrapper>
  );
};

export default Nav;
