import React from "react";
import styled, { css } from "styled-components";
import LoadingOverlay from 'react-loading-overlay-ts';

interface ILoading {
  className?: string;
  isLoading: boolean;
  text: string;
  height?: number
}

const StyledLoader = styled(LoadingOverlay) <{ isLoading: boolean, height: number }>`
  display: none; 
  height: ${props => props.height ? `${props.height}px` : '0px'};
  width: 100%;
  ${props =>
    props.isLoading &&
    css`
    display: block; 
  `}
  .loading__overlay{
    background-color: #fff;
  }
  .loading__content{
    color: #000;
  };
  .loading__spinner{
    svg circle {
    /* fill: rgba(10, 10, 10, 0.5); */
    stroke: rgba(10, 10, 10, 0.5);
    }
  }
`;

export default function Loading({ text, isLoading, height }: ILoading) {
  return (
    <StyledLoader
      active={true}
      spinner
      text={text}
      classNamePrefix='loading__'
      isLoading={isLoading}
      height={height}
    />
  );
}
