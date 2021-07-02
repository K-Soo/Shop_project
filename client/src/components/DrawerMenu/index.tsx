import React from 'react';
import styled from 'styled-components';

interface Iindex {
  className?: string;
}

const index: React.FC<Iindex> = ({ className }) => {
  return (
    <div className={className}>
      index
    </div>
  )
};


export default styled(index)`

`;