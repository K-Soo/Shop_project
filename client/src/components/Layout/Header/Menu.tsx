import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IMenu {
  className?: string;
}

const Categories = [
  { label: '로그인', value: 'login' ,url: '/auth/login'},
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
      </div>
    </div>
  )
};


export default styled(Menu)`
  height: 40px;
  background-color: #f5f5f5;
  .container{
    max-width: 1200px;
    height: 100%;
    border: 1px solid red;
    margin: 0 auto;
    &__lists{
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;