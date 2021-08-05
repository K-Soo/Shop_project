import React from 'react';
import styled, { css } from 'styled-components';

interface IDarkBackground {
  className?: string;
  active: boolean;
}

const DarkBackground: React.FC<IDarkBackground> = ({ className, children, active }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
};


export default styled(DarkBackground)`
  visibility:hidden;
  position: fixed; 
  top: 0;
  right: 0;
  width: 100%; 
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 99;
  ${props =>
    props.active &&
    css`
      visibility:visible;
  `}
`;