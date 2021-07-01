import React from 'react';
// import DaumPost from 'components/DaumPost';
import styled from 'styled-components';

interface IMainContainer {
  className?: string;
}

const MainContainer: React.FC<IMainContainer> = ({ className }) => {
  return (
    <main className={className}>
      MainContainer
      {/* <DaumPost /> */}
    </main>
  )
};


export default styled(MainContainer)`
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #000;
`;