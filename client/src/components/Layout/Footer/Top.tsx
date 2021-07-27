import React from "react";
import styled from "styled-components";
import * as S from "components/Layout/Footer/style";
import {
  ACCOUNT_INFO,
  FAVORITE_MENU,
  CUSTOMER_CENTER,
  RETURN_EXCHANGE,
} from "../../../../utils/constants/footer";
// import Gicon from '../../Icon/Gicon';
interface ITop {
  className?: string;
}

const Top: React.FC<ITop> = ({ className }) => {
  return (
    <div className={className}>
      <section className='container'>
        <article className='container__customer'>
          <S.Title>CUSTOMER CENTER</S.Title>
          <p className='container__customer--number'>
            {CUSTOMER_CENTER.number}
          </p>
          <p className='container__customer--time-zone'>
            {CUSTOMER_CENTER.open} / {CUSTOMER_CENTER.close}
          </p>
          <p className='container__customer--desc'>{CUSTOMER_CENTER.desc}</p>
        </article>

        <article className='container__account-info'>
          <S.Title>ACCOUNT INFO</S.Title>
          <ul>
            {ACCOUNT_INFO.map(d => (
              <li key={d.label} className='container__account-info--item'>
                <span>{d.label}</span>
                <span>{d.value}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className='container__favorite-menu'>
          <S.Title>FAVORITE MENU</S.Title>
          <ul>
            {FAVORITE_MENU.map(d => (
              <li key={d} className='container__favorite-menu--item'>
                {d}
              </li>
            ))}
          </ul>
        </article>

        <article className='container__return-exchange'>
          <S.Title>RETURN / EXCHANGE</S.Title>
          <ul>
            {RETURN_EXCHANGE.map(d => (
              <li key={d} className='container__return-exchange--item'>
                {d}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default styled(Top)`
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  .container {
    max-width: 1200px;
    padding: 0 20px;
    margin: 20px auto;
    display: flex;
    /* flex-wrap: wrap; */
    color: #888;
    font-size: 11px;
    justify-content: space-between;
    &__customer {
      /* flex-basis: 30%; */
      &--number {
        color: #333;
        margin-bottom: 15px;
        font-size: 30px;
        font-weight: bold;
      }
      &--time-zone {
        margin-bottom: 20px;
      }
      &--desc {
        max-width: 400px;
      }
    }
    &__account-info {
      padding: 0 30px;
      &--item {
        margin-bottom: 10px;
        span:first-child {
          ::after {
            content: " : ";
          }
        }
        &:last-child {
          margin: 0;
        }
      }
    }
    &__favorite-menu {
      /* flex-basis: 20%; */
      padding: 0 30px;
      &--item {
        margin-bottom: 10px;
        :last-child {
          margin: 0;
        }
      }
    }
    &__return-exchange {
      /* flex-basis: 30%; */
      padding-left: 30px;
      &--item {
        margin-bottom: 10px;
      }
    }
  }
`;
