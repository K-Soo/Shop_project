import React from "react";
import styled, { css } from 'styled-components';

interface ICheckBoxColor {
  className?: string;
  title: string;
  name: string;
  checked?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  height?: string;
  minWidth?: string;
  required?: boolean;
  dataColorName?: string;
}

const S = {
  CheckBoxColor: styled.label<{ minWidth: string, height: string }>`
  box-sizing: border-box;
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + span {
    min-width: ${({ minWidth }) => minWidth ?? '92px'};
    height: ${({ height }) => height ?? '30px'};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 14px;
    margin: 5px;
    border-radius: 5px;
    background: transparent;
    font-size: 13px;
    letter-spacing: 1px;
    cursor: pointer;
    border: dashed 1px #999;
  }

  input[type='checkbox']:checked + span {
    border: dashed 1px #142a69;
    color: #142a69;
  }
  `,
}

export default function CheckBoxColor({
  className,
  name,
  title,
  value,
  checked,
  height,
  minWidth,
  required,
  onChange,
  dataColorName,
}: ICheckBoxColor) {
  return (
    <S.CheckBoxColor className={className} minWidth={minWidth} height={height} >
      <input
        required={required}
        type='checkbox'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        data-color-name={dataColorName}
      />
      <span dangerouslySetInnerHTML={{ __html: title?.replace('/n', '<br />') }} />
    </S.CheckBoxColor>
  );
}
