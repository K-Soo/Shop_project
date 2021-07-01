import React from 'react';
import styled from 'styled-components';

interface IImageBox {
  className?: string;
}

const ImageBox: React.FC<IImageBox> = ({ className }) => {
  return (
    <div className={className}>
      ImageBox
    </div>
  )
};


export default styled(ImageBox)`
  height: 80px;
`;