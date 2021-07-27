import React from 'react';
import styled from 'styled-components';

interface IProduct {
  className?: string;
  items?: any;
}

const Product: React.FC<IProduct> = ({ className,items }) => {
  return (
    <div className={className}>
      Product
    </div>
  )
};


export default styled(Product)`
  border: 1px solid red;
  width: 300px;
  height: 300px;
`;