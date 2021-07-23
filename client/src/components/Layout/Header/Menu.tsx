import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

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
  border: 1px solid red;
  display: flex;
  align-items: center;
  .item {
    border: 1px solid #000;
    padding: 0px 10px;
  }
  .home-link{
    opacity: 0;
    width: 0px;
  }

  ${props => props.ScrollActive && css`
    .home-link{
      border: 1px solid red;
      width: 50px;
      /* display: block; */
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
            홈
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
  border-bottom-color: rgba(0,0,0,.09);
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