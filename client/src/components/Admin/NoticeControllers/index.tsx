import React from "react";
import styled from "styled-components";
// import ProductCreate from 'components/Admin/ProductControllers/ProductCreate';


interface INoticeControllers {
  children: React.ReactNode;
}

const S = {
  NoticeControllers: styled.section`
    height: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  `,
}

export default function NoticeControllers({ children}: INoticeControllers) {
  return (
    <S.NoticeControllers>
      {children}
    </S.NoticeControllers>
  );
}
