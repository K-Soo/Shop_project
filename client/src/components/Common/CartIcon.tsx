import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Icon from 'components/Icon/Icon';
import { useAppContext } from 'context/AppProvider';
interface ICartIcon {
  className?: string;
}

const S = {
  CartIcon: styled.li`
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50px;
    font-size: 0;
    border: solid #e8e8e8;
    border-width: 0px 0px 0px 1px;
    .qty-text{
      background-color: crimson;
      color: #fff;
      font-size: 14px;
      text-align: center;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-85%);
      width: 20px;
      height: 20px;
      line-height: 21px;
      border-radius: 50%;
      ${({ theme }) => theme.mobile`
        top: 1px;
        width: 18px;
        height: 18px;
        font-size: 12px;
      `};
    }
    svg{
      width: 30px;
      height: 30px;
      color: #222;
    }
    ${({ theme }) => theme.mobile`
      width: 40px;
    `};
  `,
}

export default function CartIcon({ className }: ICartIcon) {
  const { state } = useAppContext();

  return (
    <S.CartIcon className={className}>
      <Link href="/order/basket">
        <a className='qty-text'>
          {state.basket.basketList?.length}
        </a>
      </Link>

      <Link href="/order/basket">
        <a><Icon name='cart' /></a>
      </Link>
    </S.CartIcon>
  );
}
