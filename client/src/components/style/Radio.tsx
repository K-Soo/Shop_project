import React from 'react';
import styled,{css} from 'styled-components';

interface IRadioButtonProps {
  className?: string;
  title: string;
  name: string;
  checked?: boolean;
  value?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
  height?: string;
  minWidth?: string;
  disabled?:boolean;
  required?: boolean;
  dataSetColor?: string;
}

const RadioButton: React.FunctionComponent<IRadioButtonProps> = ({
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
  onClick,
  dataSetColor
}) => {
  return (
    <label className={className}>
      <input
        required={required}
        type='radio'
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        onClick={onClick}
        disabled={disabled}
        data-color={dataSetColor}
      />
      <span dangerouslySetInnerHTML={{ __html: title?.replace('/n', '<br />') }} />
    </label>
  );
};

export default styled(RadioButton)`
  box-sizing: border-box;
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + span {
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

  input[type='radio']:checked + span {
    border: dashed 1px #142a69;
    color: #142a69;
    box-sizing: border-box;
    ${props => props.disabled && css`
      color: #999;
      border: solid 1px #e2e0e0;
      cursor: default;
    `}
  }
`;
