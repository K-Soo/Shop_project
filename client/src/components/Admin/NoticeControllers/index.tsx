import React from "react";
import styled from "styled-components";
import { useAdminContext } from 'context/AdminProvider';


interface INoticeControllers {
  children: React.ReactNode;
}

const S = {
  NoticeControllers: styled.section<{ isWhite: boolean }>`
    height: 100%;
    width: 100%;
    background-color: ${props => props.isWhite ? '#FFF' : '#1F2A40'};
    border-radius: 5px;
    padding: 20px;
  `,
}

export default function NoticeControllers({ children}: INoticeControllers) {
  const { state } = useAdminContext();

  return (
    <S.NoticeControllers isWhite={state.isWhite}>
      {children}
    </S.NoticeControllers>
  );
}
