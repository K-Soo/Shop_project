import React from "react";
import styled from "styled-components";

interface ITitleLine {
  text:string;
}

const S = {
  TitleLine: styled.div`
    position: relative;
    z-index: 2;
    span{
      font-size: 9px;
      font-weight: bold;
      letter-spacing: 0.05em;
      margin: 15px 0 10px 0;
      background: #444;
      color: #fff;
      line-height: 20px;
      border-radius: 10px;
      padding: 0 10px 0 10px;
      display: inline-block;
    }
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #444;
      bottom: 19px;
      left: 0;
      right: 0;
      z-index: -1;
    }
  `,
}

export default function TitleLine({text}:ITitleLine) {
  return (
    <S.TitleLine>
      <span>
        {text}
      </span> 
    </S.TitleLine>
  );
}
