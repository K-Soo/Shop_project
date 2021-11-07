import React from "react";
import styled from "styled-components";

interface IMainTitle {
  title?:string;
  text:string;
}

const S = {
  MainTitle: styled.div`
    border: 1px solid red;
    padding: 100px 0 70px 0;
    text-align: center;
    em{
      font-size: 27px;
      font-weight: 900;
      color: #2840fa;
      font-style: normal;
    }
    p{
      font-size: 13px;
      font-weight: normal;
      color: #999;
      padding: 5px 0 0 0;
    }
  `,
}

export default function MainTitle({title,text}:IMainTitle) {
  return (
    <S.MainTitle>
      <em>{title}</em>
      <p>{text}</p>
    </S.MainTitle>
  );
}
