import React from "react";
import styled, { css } from "styled-components";
import LoadingOverlay from 'react-loading-overlay-ts';

interface ILoading {
  className?: string;
  isLoading: boolean;
  text: string;
}

const StyledLoader = styled(LoadingOverlay) <{ isLoading: boolean }>`
 display: block; 
      position: fixed;
      width: 100%;
      color: rgba(10, 10, 10, 0.5);
    .gosoo_content{
      color: #000;
    };
    .gosoo_spinner{
      svg circle {
      stroke: rgba(10, 10, 10, 0.5);
    }
    }

  ${props =>
    props.isLoading &&
    css`
    display: block; 
  `}
`;

export default function Loading({ text, isLoading }: ILoading) {
  return (
    <StyledLoader
      active={true}
      spinner
      text={text}
      classNamePrefix='gosoo_'
      isLoading={isLoading}
    />
  );
}
