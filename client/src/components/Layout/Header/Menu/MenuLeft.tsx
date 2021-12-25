/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { css } from "styled-components";
import { MAIN_MENU } from "constants/header";
import PAGE from "constants/path";
import Link from "next/link";

interface IMenuLeft {
  ScrollActive: boolean;
}

const S = {
  MenuLeft: styled.ul`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    letter-spacing: 0.5px;
    .item{
      width: 80px;
      border-right: 1px solid #999;
      text-align: center;
      padding: 0 5px;
      color: #323232;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      ${({ theme }) => theme.mobile`
        display: none;
      `}
      img{
        margin-right: 5px;
      }
      &:last-child{
        border: none;
      }
    }
  `,
  Home: styled.li<{ ScrollActive: boolean }>`
    opacity: 0;
    width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    ${({ ScrollActive }) => ScrollActive && css`
      color: #fff;
      width: 40px;
      background-color: rgba(55, 55, 55, 0.9);
      transition: width 0.5s ease;
      opacity: 1;
      height: 100%;
    `}
  `,
}

export default function MenuLeft({ ScrollActive }: IMenuLeft) {

  return (
    <S.MenuLeft >
      <S.Home ScrollActive={ScrollActive}>
        <Link href={PAGE.MAIN.path}>
          <a >홈</a>
        </Link>
      </S.Home>
      {MAIN_MENU.left.map(d => (
        <li key={d.value} className='item'>
          <Link href={d.url}>
            <a>{d.label}</a>
          </Link>
        </li>
      ))}
      <li className='item'>
        <img src="/images/main/ko.png" alt='kor-img'/>
        <span>한국어</span>
      </li>
    </S.MenuLeft>
  );
}
