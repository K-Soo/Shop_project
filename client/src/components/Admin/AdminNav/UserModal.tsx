import React from "react";
import styled, { css } from "styled-components";
import Title from 'components/style/Title';
import { useAdminContext } from 'context/AdminProvider';
interface IUserModal {
  openUserModal: boolean;
}

const S = {
  UserModal: styled.div<{ openUserModal: boolean, isWhite: boolean }>`
    position: absolute;
    display: ${props => props.openUserModal ? 'block' : 'none'};
    background: #fff;
    z-index: 999;
    top: 40px;
    right: 20px;
    height: 100px;
    width: 240px;
    padding: 20px;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 13%);
    .title-box{
      ${Title}{
        font-size: 16px;
      }
    }
    .content-box{
      font-size: 14px;
      color: crimson;
      cursor: pointer;
      .list{
        &__item{
          padding: 5px 0;
          :hover{
            background-color: #eff1f3;
          }
        }
      }
    }
    ${({isWhite}) => isWhite ? css`
    ` : css`
      color: #fff;
      background-color: #1F2A40;
      border: 1px solid #131C2D;
      .content-box{
        font-size: 14px;
        cursor: pointer;
        .list{
          &__item{
            padding: 5px 0;
            color: #999 !important;
            :hover{
              background-color: #131C2D;
            }
          }
        }
      }
    `}
  `,
}

export default function UserModal({ openUserModal }: IUserModal) {
  const { state, action } = useAdminContext();

  return (
    <S.UserModal openUserModal={openUserModal} isWhite={state.isWhite}>
      <div className='title-box'>
        <Title level={3}>계정정보</Title>
      </div>
      <hr />
      <div className='content-box'>
        <ul className='list'>
          <li className='list__item'>로그아웃</li>
        </ul>
      </div>
    </S.UserModal>
  );
}
