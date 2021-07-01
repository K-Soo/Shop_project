import React from 'react';
import styled from 'styled-components';

interface IRegister {
  className?: string;
}

const register: React.FC<IRegister> = ({ className }) => {
  return (
    <div className={className}>
      register
    </div>
  )
};


export default styled(register)`

`;