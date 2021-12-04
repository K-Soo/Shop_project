import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';

interface ICtrBox {
  handleCloseProducts: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleColor: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const S = {
  CtrBox: styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    button{
      font-size: 14px;
      border-radius: 5px;
      width: 100px;
      height: 35px;
      padding: 0;
    }
  `,
}

export default function CtrBox({ handleCloseProducts ,handleColor}: ICtrBox) {
  return (
    <S.CtrBox >
      {/* <Button white onClick={handleColor}>색상추가</Button> */}
      <Button black onClick={handleCloseProducts}>판매마감</Button>
    </S.CtrBox>
  );
}
