import React from 'react';
import styled from 'styled-components';

interface ITextArea {
  className?: string;
  readOnly?: boolean;
  value: string[] | string;
  width?: string;
  height?: string;
  color?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea: React.FC<ITextArea> = ({ className, value, readOnly, name, placeholder, onChange, required, height, color }) => {
  return (
    <textarea className={className} rows={13} readOnly={readOnly} height={height} color={color} value={value} name={name} placeholder={placeholder} required={required} onChange={onChange} />
  )
};

export default styled(TextArea)`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  color: ${({ color }) => (color ? `${color}` : "#747474")};
  resize: none;
  outline: none;
  font-size: 12px;
  border: 1px solid #e7e7e7e7;
  height: 100px;
  padding: 10px;
  &::placeholder {
    color: #adb5bd;
  }
`;