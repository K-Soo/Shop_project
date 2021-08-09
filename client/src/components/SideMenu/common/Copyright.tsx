import React from 'react';
import styled from 'styled-components';

interface ICopyright {
  className?: string;
}

const S = {
  Copyright: styled.div`
  font-size: 11px;
`,
}

const Copyright: React.FC<ICopyright> = ({ className }) => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <S.Copyright>
      <p>
        Copyright &copy; <span>{thisYear()}</span> Shop Co. All rights reserved.
      </p>
    </S.Copyright>
  )
};


export default styled(Copyright)`

`;