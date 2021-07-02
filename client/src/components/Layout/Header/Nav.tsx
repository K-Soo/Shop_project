import React from 'react';
import styled from 'styled-components';

interface INav {
  className?: string;
}

const lists = [
  { label: '메뉴1' },
  { label: '메뉴2' },
  { label: '메뉴3' },
  { label: '메뉴4' },
  { label: '메뉴5' },
  { label: '메뉴6' },
  { label: '메뉴7' },
]

const Nav: React.FC<INav> = ({ className }) => {
  return (
    <nav className={className}>
      <div className='container'>
        <ul className='container__lists'>
          {lists.map((d) => (
            <li className='lists--item' key={d.label}>{d.label}</li>
          ))}
        </ul>
      </div>
    </nav>
  )
};

export default styled(Nav)`
  height: 50px;
  color: #222;
  border-top: 1px solid #4c4c4c;
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
`;