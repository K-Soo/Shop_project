import React, { useState } from "react";
import styled, { css } from "styled-components";

interface ITap {
  children?: React.ReactNode;
  text: string[];
  reviewCnt: number;
}

const S = {
  Tap: styled.div`
  `,
  Categories: styled.ul<{ selectTap: number, reviewCnt: string }>`
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 14px;
    li{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border: solid #dee2e6;
      background-color: #f9f9f9;
      color: #777;
      cursor: pointer;
    }
    li:nth-child(1){
      border-width: ${props => props.selectTap === 1 ? '2px 1px 0 0' : '0 0 1px 0'};
      border-top: ${props => props.selectTap === 1 ? '2px solid #000' : '0 0 1px 0'};
      background-color: ${props => props.selectTap === 1 ? '#fff' : '#F8F9FA'};
      color: ${props => props.selectTap === 1 ? '#111' : '#999'};
    }
    li:nth-child(2){
      position: relative;
      &::after{
        content: ${({reviewCnt}) => reviewCnt ? `'${reviewCnt}'` : '0'};
        font-size: 13px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 5%;
        transform: translateY(-50%);
        width: 40px;
        background-color: #333;
        border-radius: 10px;
        padding: 1px 0;
        color: #fff;
      }
      border-width: ${props => props.selectTap === 2 ? '2px 0 0 1px' : '0 0 1px 1px'};
      border-top: ${props => props.selectTap === 2 ? '2px solid #000' : '0 0 1px 0'};
      background-color: ${props => props.selectTap === 2 ? '#fff' : '#F8F9FA'};
      color: ${props => props.selectTap === 2 ? '#111' : '#999'};
    }
    li:nth-child(3){
      border-width: ${props => props.selectTap === 3 ? '2px 1px 0 1px' : '0 0 1px 1px'};
      border-top: ${props => props.selectTap === 3 ? '2px solid #000' : '0 0 1px 0'};
      background-color: ${props => props.selectTap === 3 ? '#fff' : '#F8F9FA'};
      color: ${props => props.selectTap === 3 ? '#111' : '#999'};
    }
  `,
}

export default function Tap({ children, text, reviewCnt }: ITap) {
  const [selectTap, setSelectTap] = useState<number>(1);
  console.log('reviewCnt: ', reviewCnt);

  return (
    <S.Tap>
      <S.Categories selectTap={selectTap} reviewCnt={String(reviewCnt)}>
        {text.map((d, index) => (
          <li key={d} onClick={() => setSelectTap(index + 1)}>{d}</li>
        ))}
      </S.Categories>
      {React.Children.map(children, (child, index) => {
        if ((index + 1) === selectTap) return child;
      })}
    </S.Tap>
  );
}
