import React from "react";
import styled, { css } from "styled-components";

interface IInput {
  className?: string;
  width?: string;
  marginright?: string;
  marginleft?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: number;
  value?: string | number;
  readOnly?: boolean;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  pattern?: string;
  type?: string;
  maxLength?: number;
  minLength?: number;
  max?: number | string;
  min?: number | string;
  required?: boolean;
  title?: string;
  disabled?: boolean;
  height?: string;
}

let Input: React.FC<IInput> = ({
  className,
  placeholder,
  defaultValue,
  handleChange,
  name,
  value,
  readOnly,
  pattern,
  type,
  maxLength,
  minLength,
  max,
  min,
  required,
  title,
  disabled,
  height,
}) => {
  return (
    <input
      // type={type || 'text'}
      readOnly={readOnly}
      placeholder={placeholder}
      name={name}
      className={className}
      // defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
      pattern={pattern}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      required={required}
      title={title}
      disabled={disabled}
    />
  );
};

Input = styled(Input)`
  height: ${({ height }) => `${height}px` ?? "30px"};
  max-width: ${({ width }) => `${width}px` ?? "100%"};
  margin-right: ${({ marginright }) => `${marginright}px` ?? "0"};
  margin-left: ${({ marginleft }) => `${marginleft}px` ?? "0"};
  box-sizing: border-box;
  width: 100%;
  line-height: 1.19;
  font-size: 16px;
  border: 1px solid #dee2e6;
  padding-left: 18px;
  appearance: none;
  &::placeholder {
    color: #adb5bd;
  }
  ${props =>
    props.readOnly &&
    css`
      background-color: #f2f3f4;
      cursor: default;
      color: #999;
    `}
`;

export default Input;
