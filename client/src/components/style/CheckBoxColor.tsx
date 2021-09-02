import React from "react";
import styled, { css } from 'styled-components';

interface ICheckBoxColor {
  className?: string;
  title: string;
  name: string;
  checked?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
  height?: string;
  minWidth?: string;
  disabled?: boolean;
  required?: boolean;
  dataColorName?: string;
}

const S = {
  CheckBoxColor: styled.label<{ minWidth: string, height: string, disabled: boolean }>`
  box-sizing: border-box;
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: ${({ minWidth }) => minWidth ?? '40px'};
    height: ${({ height }) => height ?? '30px'};
    padding: 0 14px;
    border-radius: 5px;
    background: transparent;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 500;
    cursor: pointer;
    box-sizing: border-box;
    border: dashed 1px #999;
    ${props => props.disabled && css`
     background: #f2f3f4;
     border: dashed 1px #e2e0e0;
     cursor: default;
     color: #999;
    `}
  }

  input[type='checkbox']:checked + span {
    border: dashed 1px #142a69;
    color: #142a69;
    box-sizing: border-box;
    ${props => props.disabled && css`
      color: #999;
      border: solid 1px #e2e0e0;
      cursor: default;
    `}
  }
  `,
}

export default function CheckBoxColor({
  className,
  name,
  title,
  value,
  checked,
  defaultChecked,
  height,
  minWidth,
  disabled,
  required,
  onChange,
  dataColorName, }: ICheckBoxColor) {
  return (
    <S.CheckBoxColor className={className} minWidth={minWidth} height={height} disabled={disabled}>
      <input
        required={required}
        type='checkbox'
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        data-color-name={dataColorName}
      />
      <span dangerouslySetInnerHTML={{ __html: title?.replace('/n', '<br />') }} />
    </S.CheckBoxColor>
  );
}
