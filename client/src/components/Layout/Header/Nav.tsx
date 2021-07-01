import React from 'react';
import styled from 'styled-components';

interface INav {
  className?: string;
}

const lists = [
  { label: '메뉴1' },
  { label: '메뉴2' },
  { label: '메뉴3' },
]

const Nav: React.FC<INav> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className='lists'>
        {lists.map((d) => (
          <li className='lists--item' key={d.label}>{d.label}</li>
        ))}
      </ul>
    </nav>
  )
};

export default styled(Nav)`
  border: 1px solid red;
  height: auto;
  .lists{
    display: flex;
    margin: 0;
  }
`;