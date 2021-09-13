import React from "react";
import styled, { css } from "styled-components";
import MenuLeft from 'components/Layout/Header/Menu/MenuLeft';
import MenuRight from 'components/Layout/Header/Menu/MenuRight';
import Banner from 'components/Layout/Header/Menu/Banner';
interface IMenu {
  ScrollActive: boolean;
}

const S = {
  Menu: styled.nav`
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
  `,
}

export default function Menu({ ScrollActive }: IMenu) {

  return (
    <S.Menu >
      <div className='container'>
        <MenuLeft ScrollActive={ScrollActive} />
        <Banner ScrollActive={ScrollActive} />
        <MenuRight />
      </div>
    </S.Menu>
  );
};


