import React, { useState } from "react";
import styled from "styled-components";
import Title from 'components/style/Title';
import Icon from 'components/Icon/Icon';
import { useRouter, NextRouter } from 'next/router';

interface IFormFieldset {
  children: React.ReactNode
  title?: string;
  titleDisable?: boolean;
  margin?: string;
  className?: string;
  LinkBtn?: boolean;
}

const S = {
  FormFieldset: styled.article<{ margin: string }>`
    /* margin-top: 30px; */
    ${({ theme }) => theme.mobile`
      padding: 0 10px;
      border: solid #e8e8e8;
      border-width: 1px 0 0 0;
      // margin-top: 10px;
    `}
  `,
  SubTitle: styled.div<{ disable: boolean, titleDisable: boolean }>`
    position: relative;
    display: ${props => props.titleDisable ? 'none' : 'flex'};
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e8e8e8;
    margin-bottom: 10px;
    width: 100%;
    i{
      cursor: pointer;
    }
    ${Title}{
      position: relative;
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        background: #333;
      }
    }
    .arrow-icon{
      display: none;
      transform: ${props => props.disable ? 'rotate()' : 'rotate(180deg)'};
      font-size: 0;
      svg{
        height: 16px;
        width: 16px;
      }
    }
    .plus{
      font-size: 0;
      padding-right: 5px;
      svg{
        height: 14px;
        width: 14px;
      }
    }
    ${({ theme }) => theme.mobile`
      align-items: center;
      border-bottom: none;
      margin-bottom: 0px;
      height: 35px;
      ${Title}{
        font-size: 14px;
        &::after{
          content: none;
        }
      }
      .arrow-icon{
        display: block;
      }
    `}
  `,
  Content: styled.div<{ disable: boolean }>`
    padding-bottom: 20px;
    ${({ theme }) => theme.mobile`
      display: none;
      display: ${({ disable }: any) => disable ? 'block' : 'none'};
    `}
  `,
}

export default function FormFieldset({ className, children, title, titleDisable, margin, LinkBtn }: IFormFieldset) {
  const [disable, setDisable] = useState(true);
  const router = useRouter();

  return (
    <S.FormFieldset margin={margin} className={className}>
      <S.SubTitle disable={disable} titleDisable={titleDisable}>
        <Title level={3} size='18' textAlign='left'>{title}</Title>
        {LinkBtn || (
          <i onClick={() => setDisable(!disable)} className='arrow-icon'>
            <Icon style={{ color: '#333' }} name='arrowNoTailBottom' />
          </i>
        )}

        {LinkBtn && (
          <i onClick={() => router.push('/board/notice')} className='plus'>
            <Icon style={{ color: '#333' }} name='plus' />
          </i>
        )}
      </S.SubTitle>
      <S.Content disable={disable} className='content'>
        {children}
      </S.Content>
    </S.FormFieldset>
  );
}
