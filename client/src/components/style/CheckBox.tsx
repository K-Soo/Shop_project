import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
interface ICheckBox {
  className?: string;
  value?: string;
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  marginL?: string;
  marginR?: string;
  id?:string;
}

const CheckBoxInput: React.FunctionComponent<ICheckBox> = ({
  className,
  name,
  onChange,
  defaultChecked,
  checked,
  value,
  required,
  id
}) => {
  return (
    <label className={className}>
      <input
        type='checkbox'
        name={name}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
        value={value}
        required={required}
        id={id}
      />
      <div>
        <Icon name='check' />
      </div>
    </label>
  );
};

export default styled(CheckBoxInput)`
  position: relative;
  max-width: 20px;
  width: 20px;
  height: 20px;
  display: inline-block;
  font-size: 0;
  margin-left: ${({ marginL }) => `${marginL}px` ?? '0'};
  margin-right: ${({ marginR }) => `${marginR}px` ?? '0'};
  svg{
    color: #dee2e6;
    width: 18px;
    height: 18px;
    padding-right: 1px;
    padding-bottom: 2px;
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
    font-size: 0;
  }
  input[type='checkbox']:checked + div {
    border: #142a69;
    background-color: #142a69;
    font-size: 0;
    svg{
      display: inline-block;
      color: #fff;
      font-size: 0;
      width: 18px;
      height: 18px;
      padding-top: 3px;
      padding-left: 2px;
    }
  }

`;
