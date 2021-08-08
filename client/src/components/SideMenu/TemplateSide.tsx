import React, { useState } from 'react';
import styled from 'styled-components';
import LeftSide from 'components/SideMenu/LeftSide';
interface ITemplateSide {
  className?: string;
}
enum direction {
  left,
  right
}

const TemplateSide: React.FC<ITemplateSide> = ({ className, children }) => {
  console.log('children: ', children);
  const [direction, setDirection] = useState(true);
  console.log('direction: ', direction);

  const handler = (e) => {
    setDirection(!direction)
  }

  return (
    <div className={className}>
      <LeftSide onClick={() => setDirection(!direction)} />
    </div>
  )
};


export default styled(TemplateSide)`
border: 1px solid red;

`;