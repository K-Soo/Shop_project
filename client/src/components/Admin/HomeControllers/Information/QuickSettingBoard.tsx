import React from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import { useAdminContext } from 'context/AdminProvider';

const S = {
  QuickSettingBoard: styled.div<{ isWhite: boolean }>`
    background-color: ${props => props.isWhite ? '#fff' : '#1F2A40'};
    transition: background-color 0.3s ease;
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

export default function QuickSettingBoard() {
  const { state, action } = useAdminContext();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name,checked} = event.target;
    action.setData(name, checked);
  };

  return (
    <S.QuickSettingBoard isWhite={state.isWhite}>
      <div className='header'>
        <Title level={2}>빠른설정</Title>
      </div>
      <div>
 
      </div>
    </S.QuickSettingBoard>
  );
}
