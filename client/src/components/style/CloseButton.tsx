import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';

interface ICloseButton {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const CloseButton: React.FC<ICloseButton> = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <Icon name='close' />
    </button>
  )
};


export default styled(CloseButton)`
  all: unset;
  font-size: 0;
  background-color: #111;
  /* padding: 5px; */
  /* border-radius: 50%; */
  svg{
    /* width: 15px; */
    /* height: 15px; */
  }
  :hover{
    background-color: #333;
  }
`;