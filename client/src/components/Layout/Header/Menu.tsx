import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IMenu {
  className?: string;
}

const Categories = [
  { label: '로그인', value: 'login', url: '/auth/login' },
  { label: '회원가입', value: 'register', url: '/auth/register' },
]

const Menu: React.FC<IMenu> = ({ className }) => {
  return (
    <div className={className}>
      <div className='container'>
        <ul className='container__lists'>
          {Categories.map((d) => (
            <li key={d.value} className='container__lists--item'>
              <Link href={d.url} >
                <a>
                  {d.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <ul className='container__'>
          {Categories.map((d) => (
            <li key={d.value} className='container__lists--item'>
              <Link href={d.url} >
                <a>
                  {d.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

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
    justify-content: space-between;
    &__lists{
      height: 100%;
      border: 1px solid red;
      display: flex;
      align-items: center;
    }
  }
`;