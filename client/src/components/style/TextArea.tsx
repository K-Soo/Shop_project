import React from 'react';
import styled from 'styled-components';

interface ITextArea {
  className?: string;
  value :string[];
}

const TextArea: React.FC<ITextArea> = ({ className,value }) => {
  return (
    <textarea className={className} rows={13} readOnly value={value}/>
  )
};


export default styled(TextArea)`
  width: 100%;
  resize: none;
  outline: none;
  font-size: 12px;
  color: #747474;
  border: 1px solid #e7e7e7e7;
  padding: 10px;
`;