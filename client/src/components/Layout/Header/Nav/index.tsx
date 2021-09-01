import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import SearchGroup from 'components/Layout/Header/Nav/SearchGroup';
import CategoryGroup from 'components/Layout/Header/Nav/CategoryGroup';

interface INav {
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
}

export default function Nav({ ScrollActive }:INav)  {

  return (
    <S.Nav ScrollActive={ScrollActive} >
      <S.container >
        <S.ItemBox >
          <CategoryGroup />
          <SearchGroup />
        </S.ItemBox>
      </S.container>
    </S.Nav>
  );
};

