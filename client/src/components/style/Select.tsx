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
  maxWidth?:string;
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
  maxWidth
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
  width: ${({width}) => width ? `${width}px` : '100%'};
  max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px` : '100%'};
  margin-left: ${({ marginLeft }) => `${marginLeft}px` ?? "0"};
  margin-right: ${({ marginRight }) => `${marginRight}px` ?? "0"};
  height: ${props => (props.height ? `${props.height}px` : "100%")};
  font-size: 14px;
  padding-left: 15px;
  border: 1px solid #dee2e6;
  cursor: pointer;
  appearance: none; 
  -moz-appearance: none; 
  -webkit-appearance: none; 
  border-radius: 0; 
  -webkit-border-radius: 0; 
  -moz-border-radius: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='f000000'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat 98% 50% #fff;
  background-size: 12px;
  background-position: calc(100% - 10px) center;
  background-repeat: no-repeat;
  background-color: #fff;
}
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
