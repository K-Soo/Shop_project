import React from "react";
import styled from "styled-components";
import Icon from 'components/Icon/Icon';
import Title from 'components/style/Title';
import { NextRouter, useRouter } from 'next/router';

interface IPageTitle {
  TitleText: string;
}

const S = {
  PageTitle: styled.article`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    .redirect-icon{
      display: none;
      position: absolute;
      font-size: 0;
      left: 10px;
      cursor: pointer;
      &:hover{
        svg{
          color: #000;
        }
      }
      svg{
        width: 24px;
        height: 24px;
      }
    }
    ${({ theme }) => theme.mobile`
      justify-content: center;
      align-items: center;
      .redirect-icon{
        display: block;
      }
      ${Title}{
        font-size: 20px;
      }
    `}
  `,
}

export default function PageTitle({ TitleText }: IPageTitle) {
  const router: NextRouter = useRouter();

  return (
    <S.PageTitle>
      <i className='redirect-icon' onClick={() => router.back()}>
        <Icon name='BigArrowLeft' />
      </i>
      <Title level={3} size='24' textAlign='left'>{TitleText}</Title>
    </S.PageTitle>
  );
}
