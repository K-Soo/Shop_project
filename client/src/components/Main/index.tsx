import React from "react";
import styled from "styled-components";
import Banner from 'components/Main/Banner';
import TEST from 'MOCK/TEST.json';

interface IMain {
  
}

const S = {
  Main: styled.div`

  `,
}

export default function Main({}:IMain) {
  return (
    <S.Main>
      <Banner />
    </S.Main>
  );
}
