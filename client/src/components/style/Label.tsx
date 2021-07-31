import React from "react";
import styled, { css } from "styled-components";

interface ILabel {
  className?: string;
  required?: boolean;
  width?: string;
  margin?: string;
  height?: string;
  htmlFor: string;
}

const Label: React.FC<ILabel> = ({ className, children, htmlFor }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default styled(Label)`
  display: inline-block;
  margin: ${({ margin }) => `${margin}` ?? "0px"};
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
`;
