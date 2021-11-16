import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';

interface IQuickSettingBoard {

}

const S = {
  QuickSettingBoard: styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 15px;
    .header{
      ${Title}{
        font-size: 18px;
        text-align: left;
      }
    }
  `,
}

export default function QuickSettingBoard({ }: IQuickSettingBoard) {
  return (
    <S.QuickSettingBoard>
      <div className='header'>
        <Title level={2}>빠른설정</Title>
      </div>
    </S.QuickSettingBoard>
  );
}
