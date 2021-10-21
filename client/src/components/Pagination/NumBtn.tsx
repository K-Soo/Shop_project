import React from "react";
import styled from "styled-components";

interface INumBtn {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value?: string;
  name?: string;
  active?: boolean;
  children: React.ReactNode;
  disabled:boolean;
}

const S = {
  NumBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor:pointer;
    margin: 0 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    border: 1px solid #fff;
    font-size: 13px;
    &:hover{
      text-decoration: underline;
    }
    &[data-active=true] {
      border: 1px solid #999;
      background-color: #f9f9f9;
      cursor: default;
      text-decoration: none;
    };
  `,
}

export default function NumBtn({ onClick, value, name, children, active,disabled }: INumBtn) {
  return (
    <S.NumBtn 
      onClick={onClick} 
      name={name} 
      value={value} 
      data-active={active} 
      disabled={disabled}
    >
      {children}
    </S.NumBtn>
  );
}
