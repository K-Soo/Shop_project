import React from 'react';
import styled from 'styled-components';
import * as S from 'components/Layout/Footer/style';
import { ACCOUNT_INFO, FAVORITE_MENU, CUSTOMER_CENTER, RETURN_EXCHANGE } from '../../../../utils/constants/footer';

interface ITop {
  className?: string;
}

const Top: React.FC<ITop> = ({ className }) => {
  return (
    <div className={className}>
      <section className='container'>
        <article className='container__customer'>
          <S.Title>CUSTOMER CENTER</S.Title>
          <p className='container__customer--number' >
            {CUSTOMER_CENTER.number}
          </p>

          <p>
            {CUSTOMER_CENTER.open} / {CUSTOMER_CENTER.close}
          </p>

          <p>
            {CUSTOMER_CENTER.desc}
          </p>
        </article>

        <article className='container__account-info'>
          <S.Title>ACCOUNT INFO</S.Title>
          <ul>
            {ACCOUNT_INFO.map((d) => (
              <li key={d.label}>
                <span>
                  {d.label}
                </span>
                <span>
                  {d.value}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className='container__favorite-menu'>
          <S.Title>FAVORITE MENU</S.Title>
          <ul>
            {FAVORITE_MENU.map((d) => (
              <li key={d}>
                {d}
              </li>
            ))}
          </ul>
        </article>

        <article className='container__favorite-menu'>
          <S.Title>RETURN / EXCHANGE</S.Title>
          <ul>
            {RETURN_EXCHANGE.map((d) => (
              <li key={d}>
                {d}
              </li>
            ))}
          </ul>
        </article>

      </section>
    </div>
  )
};



export default styled(Top)`
  /* height: 150px; */
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  .container{
    max-width: 1200px;
    margin: 20px auto;
    border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    &__customer{
      border: 1px solid red;
      flex-basis: 30%;
    }
    &__account-info{
      border: 1px solid red;
      /* flex-basis: 30%; */
    }
  }
`;