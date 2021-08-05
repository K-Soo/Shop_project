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

`;