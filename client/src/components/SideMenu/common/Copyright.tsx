import React from 'react';
import styled from 'styled-components';

interface ICopyright {
}

const S = {
  Copyright: styled.div`
  margin-top: 30px;
  padding: 30px 0 20px 0;
  border-top: 1px solid #f2f2f2;
  font-size: 11px;
`,
}

export default function Copyright({ }:ICopyright) {
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

