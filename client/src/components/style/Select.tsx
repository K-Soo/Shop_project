import React from "react";
import styled, { css } from "styled-components";
interface ISelect {
  className?: string;
  marginRight?: string;
  marginLeft?: string;
  width?: string;
  height?: string;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  id?: string;
  readOnly?: boolean;
}

let Select: React.FunctionComponent<ISelect> = ({
  className,
  children,
  name,
  value,
  id,
  onChange,
  disabled,
  required,
}) => {
  return (
    <select
      required={required}
      className={className}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </select>
  );
};

Select = styled(Select)`
  box-sizing: border-box;
  width: ${({ width }) => `${width}` ?? "100%" };
  margin-left: ${({ marginLeft }) => `${marginLeft}px` ?? "0"};
  margin-right: ${({ marginRight }) => `${marginRight}px` ?? "0"};
  height: ${props => (props.height ? `${props.height}px` : "100%")};
  font-size: 14px;
  padding-left: 15px;
  border: 1px solid #dee2e6;
  cursor: pointer;
  :hover{
    border: 1px solid #333;
  }
  ${props =>
    props.disabled &&
    css`
      background-color: #f2f3f4;
      cursor: default;
      color: #999;
    `}
`;

export default Select;
