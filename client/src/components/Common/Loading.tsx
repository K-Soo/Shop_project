import React from "react";
import styled, { css } from "styled-components";
import LoadingOverlay from 'react-loading-overlay-ts';

interface ILoading {
  className?: string;
  isLoading: boolean;
  text: string;
}

const StyledLoader = styled(LoadingOverlay) <{ isLoading: boolean }>`
      height: 200px;
      background-color: #fff;
      width: 100%;
    .gosoo_overlay{
      background-color: #fff;

    }
    .gosoo_content{
      /* background-color: #fff; */

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
