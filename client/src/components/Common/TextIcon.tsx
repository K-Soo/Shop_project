import React from "react";
import styled, { css } from "styled-components";

interface ITextIcon {
  text: string;
  margin?: string;
  height?: string;
}

const S = {
  TextIcon: styled.span<{ text: string, margin: string,height: string }>`
    background-color: #999;
    display: block;
    align-items: center;
    border-radius: 5%;
    padding: 1px 5px;
    color: #fff;
    font-size: 12px;
    margin: ${({ margin }) => margin ?? "0px"};
    height: ${({ height }) => height ?? "100%"};
    ${props =>
      props.text === 'best' &&
      css`
      color: #505050;
      background-color: #fff;
      border: 1px solid #eee;
    `}
    ${props =>
      props.text === 'new' &&
      css`
      color: #718FC5;
      background-color: #FFEF36;
    `}
  `,
}

export default function TextIcon({ text, margin ,height}: ITextIcon) {
  return (
    <S.TextIcon text={text} margin={margin} height={height}>
      {text}
    </S.TextIcon>
  );
}
