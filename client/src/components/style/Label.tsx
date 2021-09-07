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
  minWidth?:string
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
  margin: ${({ margin }) => `${margin}` ?? "0px"};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}` ?? "0px"};
  min-width: ${({ minWidth }) => minWidth ?? "80px"};
  width: ${({ width }) => width ?? "80px"};
  display: inline-block;
  height: 100%;
  white-space: nowrap;
  font-size: 12px;
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
    // width: 60px;
    padding-right: 5px;
  `}
`;
