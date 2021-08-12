import React from "react";
import styled,{css} from "styled-components";
import LoadingOverlay from 'react-loading-overlay';

interface ILoading {
  className?: string;
  isLoading: boolean;
  text: string;
}

const S = {
  Loading: styled.div<{ isLoading: boolean }>`
    display: none;
    position: fixed; 
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0); 
    background-color: rgba(0, 0, 0, 0.4); 
    ._loading_overlay_content{
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translateX(-50%);
      }
    ${props =>
        props.isLoading &&
        css`
        display: block; 
    `}
  `,
}

export default function Loading({ text,isLoading }: ILoading) {
  return (
    <S.Loading isLoading={isLoading}>
      <LoadingOverlay
        active={true}
        spinner
        text={text}
      />
    </S.Loading>
  );
}
