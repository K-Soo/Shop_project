import React from "react";
import styled, { css } from "styled-components";

interface IButton {
  className?: string;
  login?: boolean;
  kakao?: boolean;
  header?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButton> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default styled(Button)`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "50px"};
  margin: ${({ margin }) => margin ?? "0px"};
  font-size: ${({ fontSize }) => fontSize ?? "16px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "500"};
  cursor: pointer;
  text-align: center;
  background: #152a69;
  object-fit: contain;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #ffffff;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #00003e;
  }
  ${props =>
    props.login &&
    css`
      background: #000002;
      &:hover {
        background: #2a2b2d;
      }
    `}
  ${props =>
    props.kakao &&
    css`
      background: #feed35;
      color: #222;
      &:hover {
        background: #ffff6e;
      }
    `}
`;
