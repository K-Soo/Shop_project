import React from 'react';
import styled from 'styled-components';

interface IRegister {
  className?: string;
}

const Register: React.FC<IRegister> = ({ className }) => {
  return (
    <div className={className}>
      index
    </div>
  )
};


export default styled(Register)`

`;