import React from "react";
import styled, { css } from "styled-components";

interface ITextIcon {
  text: string;
  margin?: string;
}

const S = {
  TextIcon: styled.span<{ text: string, margin: string }>`
    background-color: #999;
    display: block;
    align-items: center;
    border-radius: 5%;
    padding: 1px 5px;
    color: #fff;
    font-size: 12px;
    margin: ${({ margin }) => margin ?? "0px"};
    ${props =>
      props.text === 'best' &&
      css`
      color: #fff;
      background-color: #1B5DF6;
    `}
    ${props =>
      props.text === 'new' &&
      css`
      color: #718FC5;
      background-color: #FFEF36;
    `}
  `,
}

export default function TextIcon({ text, margin }: ITextIcon) {
  return (
    <S.TextIcon text={text} margin={margin}>
      {text}
    </S.TextIcon>
  );
}
