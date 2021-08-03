import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Input from 'components/style/Input';
import Icon from 'components/Icon/Icon';

interface INavSearchBar {
  className?: string;
  toggle: boolean;
}

const S = {
  wrapper: styled.div<{ toggle: boolean }>`
    position: absolute;
    visibility: hidden;
    border: 1px solid #e8e8e8;
    border-width: 0px 1px 1px 1px;
    width: 500px;
    height: 0px;
    top: 48px;
    right: 0;
    padding: 20px;
    background-color: #fff;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
    ${props => props.toggle && css`
      height: 200px;
      visibility: visible;
      transition: all 0.5s ease;
    `}
    ${({ theme }) => theme.mobile`
      width: 100%;
    `}
  `,
  form: styled.form<{ toggle: boolean }>`
    width: 100%;
    margin: 0 auto;
    fieldset{
      position: relative;
      display: flex;
      align-items : center;
    }
    input{
      all: unset;
      box-sizing: border-box;
      width:100%;
      padding-left: 20px;
      background-color: #636363;
      outline: none;
      border-radius: 20px;
      height: 30px;
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 1px;
      opacity:0;
      ${props => props.toggle && css`
        opacity:1;
        transition: all 0.5s ease;
      `}
    }
    .icon-box{
      position: absolute;
      right: 3%;
      font-size: 0;
      svg{
        width: 18px;
        height: 18px;
      }
    }
  `,
}

const NavSearchBar: React.FC<INavSearchBar> = ({ className, toggle }) => {
  const InputFocus = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (toggle) {
      setTimeout(() => InputFocus.current?.focus(), 1000)
    }
  }, [toggle])

  return (
    <S.wrapper className={className} toggle={toggle}>
      <S.form toggle={toggle}>
        <fieldset>
          <input ref={InputFocus} type='text' />
          <span className='icon-box'>
            <Icon name='search' />
          </span>
        </fieldset>
      </S.form>
    </S.wrapper>
  )
};


export default NavSearchBar;
