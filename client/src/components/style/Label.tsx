import React from "react";
import styled, { css } from "styled-components";

interface ILabel {
  className?: string;
  htmlFor: string;
  required?: boolean;
  width?: string;
  margin?: string;
  height?: string;
  marginBottom?:string
  color?: string;
}

const Label: React.FC<ILabel> = ({ className, children, htmlFor }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default styled(Label)`
  color: ${({ color }) => color ?? "#222"};
  display: inline-block;
  margin: ${({ margin }) => `${margin}` ?? "0px"};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}` ?? "0px"};
  width: ${({ width }) => width ?? "100px"};
  height: 100%;
  font-size: 14px;
  ${props =>
    props.required &&
    css`
      &::after {
        content: " *";
        color: red;
      }
    `}

  ${({ theme }) => theme.mobile`
    font-size: 11px;
    width: 80px;

  `}
`;
