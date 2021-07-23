import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

interface INav {
  className?: string;
  ScrollActive: boolean;
}

const lists: { label: string }[] = [
  { label: '메뉴1' },
  { label: '메뉴2' },
  { label: '메뉴3' },
  { label: '메뉴4' },
  { label: '메뉴5' },
  { label: '메뉴6' },
  { label: '메뉴7' },
]

const StyledNav = styled.nav<{ ScrollActive: boolean }>`
  height: 50px;
  color: #222;
  border-top: 1px solid #4c4c4c;
  width: 100%;
  border-top-color: rgba(0,0,0,.70);
  border-bottom: 1px solid #e8e8e8;
  border-bottom-color: rgba(0,0,0,.09);
  .container{
    height:100%;
    max-width:1200px;
    margin: 0 auto;
    &__lists{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height:100%;
    }
  }
  ${props => props.ScrollActive && css`
    position: fixed;
    top:40px;
    border-top: none;
  `}
`;


const Nav: React.FC<INav> = ({ className, ScrollActive }) => {
  return (
    <StyledNav className={className} ScrollActive={ScrollActive}>
      <div className='container'>
        <ul className='container__lists'>
          {lists.map((d) => (
            <li className='lists--item' key={d.label}>{d.label}</li>
          ))}
        </ul>
      </div>
    </StyledNav>
  )
};



export default Nav;