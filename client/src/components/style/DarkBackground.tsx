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
  /* display: none; */
  /* position: fixed;  */
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); 
  /* border: 1px solid red; */
  ${props =>
    props.active &&
    css`
      display: block; 
  `}
`;