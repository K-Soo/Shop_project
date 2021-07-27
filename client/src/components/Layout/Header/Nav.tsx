import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

interface INav {
  className?: string;
  ScrollActive: boolean;
}

const lists: { label: string }[] = [
  { label: "메뉴1" },
  { label: "메뉴2" },
  { label: "메뉴3" },
  { label: "메뉴4" },
  { label: "메뉴5" },
  { label: "메뉴6" },
  { label: "메뉴7" },
];

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
      &--item {
        display: inline-block;
        height: 100%;
        text-align: center;
        border: 1px solid red;
        flex: 1;
        a {
          display: inline-block;
          height: 100%;
          padding: 0 10px;
          line-height: 3;
          border: 1px solid red;
          vertical-align: bottom;
          font-size: 14px;
          ${({ theme }) => theme.mobile`
            // font-size: 10px;
            padding: 0;

          `}
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
    <StyledNav className={className} ScrollActive={ScrollActive}>
      <div className='container'>
        <ul className='container__lists'>
          {lists.map(d => (
            <li className='container__lists--item' key={d.label}>
              <Link href={""}>
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
