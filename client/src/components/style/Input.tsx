import React from "react";
import styled, { css } from "styled-components";

interface IInput {
  className?: string;
  id?: string;
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
  margin?: string;
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
  margin,
  id,
  width,
}) => {
  return (
    <input
      type={type || "text"}
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
      id={id}
    />
  );
};

Input = styled(Input)`
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  /* width: ${({ width }) => (width ? `${width}` : "100%")}; */
  width: ${props => props.width ?  props.width : '100%'};
  margin: ${({ margin }) => margin ?? "0px"};
  box-sizing: border-box;
  font-size: 12px;
  padding-left: 10px;
  border: 1px solid #dee2e6;
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
