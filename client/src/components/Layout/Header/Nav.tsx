import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { NAV_MENU } from "../../../../utils/constants/nav";
interface INav {
  className?: string;
  ScrollActive: boolean;
}

const StyledNav = styled.nav<{ ScrollActive: boolean }>`
  height: 50px;
  color: #222;
  width: 100%;
  border-top: 1px solid #4c4c4c;
  border-top-color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid #e8e8e8;
  border-bottom-color: rgba(0, 0, 0, 0.09);
  .container {
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    &__lists {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      height: 100%;
      align-items: center;
      &--item {
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
      }
    }
  }
  ${props =>
    props.ScrollActive &&
    css`
      position: fixed;
      top: 40px;
      border-top: none;
    `}
`;

const Nav: React.FC<INav> = ({ className, ScrollActive }) => {
  return (
    <StyledNav className={className} ScrollActive={ScrollActive} id='top'>
      <div className='container' id='top'>
        <ul className='container__lists'>
          {NAV_MENU.map(d => (
            <li className='container__lists--item' key={d.label}>
              <Link href={d.url}>
                <a>{d.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledNav>
  );
};

export default Nav;
