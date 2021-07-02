import React from 'react';
import styled from 'styled-components';

interface ISubTop {
  className?: string;
}

const SubTop: React.FC<ISubTop> = ({ className }) => {
  return (
    <section className={className}>
      <div className='container'>
        <ul className='container__lists'>
          <li>회사소개</li>
          <li>회사소개</li>
          <li>회사소개</li>
          <li>회사소개</li>
        </ul>
      </div>
    </section>
  )
};


export default styled(SubTop)`
  padding: 12px 0;
  .container{
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    &__lists{
      display: flex;
    }
  }
`;