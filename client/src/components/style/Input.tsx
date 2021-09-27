import React from "react";
import styled, { css } from "styled-components";

interface IInput {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement>;
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
  maxWidth?: string;
}

let Input: React.FC<IInput> = ({
  className,
  placeholder,
  defaultValue,
  onChange,
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
  maxWidth,
  onBlur,
  onFocus,
  onKeyPress,
}) => {
  return (
    <input
      type={type}
      readOnly={readOnly}
      placeholder={placeholder}
      name={name}
      className={className}
      // defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      pattern={pattern}
      maxLength={maxLength}
      minLength={minLength}
      onBlur={onBlur}
      onFocus={onFocus}
      max={max}
      min={min}
      required={required}
      title={title}
      disabled={disabled}
      id={id}
      onKeyPress={onKeyPress}
      autoComplete='off'
    />
  );
};

Input = styled(Input)`
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  width: ${({width}) => width ? `${width}px` : '100%'};
  max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px` : '100%'};
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
