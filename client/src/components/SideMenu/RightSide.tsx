import React from 'react';
import styled from 'styled-components';

interface IRightSide {
  className?: string;
}

const RightSide: React.FC<IRightSide> = ({ className }) => {
  return (
    <nav className={className}>
      RightSide
    </nav>
  )
};


export default styled(RightSide)`

`;