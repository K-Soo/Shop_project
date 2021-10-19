import React from "react";
import styled,{css} from "styled-components";

interface ITurnBtn {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value?: string;
  children: React.ReactNode;
  disabled?:boolean;
}

const S = {
  TurnBtn: styled.button<{disabled:boolean}>`
      margin: 0 3px;
      background-color: #fff;
      cursor: ${props => props.disabled ? 'default' : 'pointer'};
      font-size: 12px;
      &:hover{
        text-decoration: ${props => props.disabled ? 'none' : 'underline'};
      }
  `,
}

export default function TurnBtn({onClick, value,  children, disabled }:ITurnBtn) {
  return (
    <S.TurnBtn disabled={disabled} onClick={onClick} value={value} >
      {children}
    </S.TurnBtn>
  );
}
