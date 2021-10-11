import React from "react";
import styled from "styled-components";
import Icon from 'components/Icon/Icon';

interface IRate {
  name: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  checked: boolean;
  value: number;
  text: string;
}

const S = {
  Rate: styled.label<{text:string}>`
    display: flex;
    align-items: flex-end;
    &::after{
      content: ${({text}) => `'${text}'`};
      padding-left: 5px;
    }
    i{
      display: inline-block;
      font-size: 0;
    }
     input[type='radio'] {
      display: none;
    }
  `,
}

export default function Rate({
  name,
  onClick,
  checked,
  value,
  text
}: IRate) {
  return (
    <S.Rate text={text}>
      <input
        type='radio'
        name={name}
        onClick={onClick}
        value={value}
      />
      {checked ? (<i className='check'><Icon name='circleCheck' style={{ color: '#8c4153' }} /></i>) : (<i className='plus'><Icon name='circlePlus' /></i>)}
    </S.Rate>
  );
}
