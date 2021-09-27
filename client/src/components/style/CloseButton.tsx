import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';

interface ICloseButton {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  name?: string
}

const CloseButton: React.FC<ICloseButton> = ({ className, onClick,name }) => {
  return (
    <button className={className} name={name} onClick={onClick}>
      <Icon name='close' />
    </button>
  )
};


export default styled(CloseButton)`
  all: unset;
  font-size: 0;
  background-color: #111;
  cursor: pointer;
  svg{
    pointer-events:none;
  }
  :hover{
    background-color: #333;
  }
`;