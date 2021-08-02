import React from "react";
import styled, { css } from "styled-components";
interface ISelect {
  className?: string;
  marginright?: string;
  marginleft?: string;
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
  width: ${({ width }) => `${width}px` ?? "100%"};
  margin-left: ${({ marginleft }) => `${marginleft}px` ?? "0"};
  margin-right: ${({ marginright }) => `${marginright}px` ?? "0"};
  height: ${props => (props.height ? `${props.height}px` : "40px")};
  font-size: 14px;
  padding-left: 10px;
  border: 1px solid #dee2e6;
  ${props =>
    props.disabled &&
    css`
      background-color: #f2f3f4;
      cursor: default;
      color: #999;
    `}
`;

export default Select;
