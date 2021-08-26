import React from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon/Icon';
interface ICheckBox {
  className?: string;
  value?: string;
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  marginright?: string;
  marginleft?: string;
}

const CheckBoxInput: React.FunctionComponent<ICheckBox> = ({
  className,
  name,
  onChange,
  defaultChecked,
  checked,
  value,
  required
}) => {
  return (
    <div className={className}>
      <input
        type='checkbox'
        name={name}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
        value={value}
        required={required}
      />
      <div>
        <Icon name='check' />
      </div>
    </div>
  );
};

export default styled(CheckBoxInput)`
  position: relative;
  max-width: 20px;
  width: 20px;
  height: 20px;
  display: inline-block;
  font-size: 0;
  margin-left: ${({ marginleft }) => `${marginleft}px` ?? '0'};
  margin-right: ${({ marginright }) => `${marginright}px` ?? '0'};
  svg{
      display: none;
  }
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + div {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    border: 2px solid #dee2e6;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type='checkbox']:checked + div {
    border: #142a69;
    background-color: #142a69;
    svg{
      display: block;
      padding-top: 2px;
      padding-left: 2px;
    }
  }

`;
