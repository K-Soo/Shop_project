import React from 'react';
import styled from 'styled-components';

interface IIItem {
  className?: string;
}

const Item: React.FC<IIItem> = ({ className }) => {
  return (
    <div className={className}>
      Item
    </div>
  )
};


export default styled(Item)`

`;