import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import PAGE from '../../../../utils/path';

interface IMenu {
  className?: string;
  ScrollActive: boolean;
}

const Categories: { label: string, value: string, url: string }[] = [
  { label: '로그인', value: 'login', url: '/auth/login' },
  { label: '회원가입', value: 'register', url: '/auth/register' },
]


const Lists = styled.ul<{ ScrollActive: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  a{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 100%;
    line-height: 38px;
  }
  .item {
    height: 100%;
    width: 50px;
  }
  .home-link{
    opacity: 0;
    width: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${props => props.ScrollActive && css`
    .home-link{
      color: #fff;
      width: 50px;
      background-color: rgba(55,55,55,0.9);
      transition: width .5s ease;
      opacity: 1;
      height: 100%;
    }
  `}
  
`;

const Menu: React.FC<IMenu> = ({ className, ScrollActive }) => {
  return (
    <div className={className}>
      <div className='container'>
        <Lists className='lists' ScrollActive={ScrollActive}>
          <li className='home-link'>
            <Link href={PAGE.MAIN.path}>
              <a>
                홈
              </a>
            </Link>
          </li>
          {Categories.map((d) => (
            <li key={d.value} className='item'>
              <Link href={d.url} >
                <a>
                  {d.label}
                </a>
              </Link>
            </li>
          ))}
        </Lists>
      </div>
    </div>
  )
};

export default styled(Menu)`
  height: 40px;
  background-color: rgba(255,255,255,.95);
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  /* border-bottom: rgba(0,0,0,.09); */
  .container{
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    color: #323232;
    font-size: 12px;
    letter-spacing: 0.5px;
    display: flex;
    /* justify-content: space-between; */
    /* &__lists{
      height: 100%;
      border: 1px solid red;
      display: flex;
      align-items: center;
    } */
  }
`;