import React from "react";
import styled from "styled-components";
import Button from 'components/style/Button';

interface ICtrBox {
  className?:string;
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

export default function CtrBox({className}:ICtrBox) {
  return (
    <S.CtrBox className={className}>
      <Button>일괄종료</Button>
      <Button>판매종료</Button>
    </S.CtrBox>
  );
}
