import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HamburgerIcon from 'components/Common/HamburgerIcon';
import { useAdminContext } from 'context/AdminProvider';
import Image from "next/image";
import Link from 'next/link';
import PAGE from 'constants/path';
import Icon from 'components/Icon/Icon';
import UserModal from 'components/Admin/AdminNav/UserModal';
import ConfigModal from 'components/Admin/AdminNav/ConfigModal';
interface IAdminNav {

}

const S = {
  AdminNav: styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    ${props => props.theme.mobile`
      padding: 0 10px 0 15px;
    `}
  `,
  UserInfo: styled.div<{ openUserModal: boolean, isWhite: boolean }>`
    display: flex;
    align-items: center;
    height: 100%;
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;
      &:hover{
        background: #eff1f3;
        background: ${props => props.isWhite ? '#eff1f3' : '#131C2D'};
        transition: background 0.3s ease;
      }
    }
    .user{
      padding: 0 10px;
      position: relative;
      min-width: 200px;
      display: flex;
      justify-content: space-between;
      &__text{
        flex: 1;
        text-align: center;
        pointer-events: none;
      }
      svg{
        margin-left: 5px;
        width: 14px;
        height: 14px;
        transform: ${props => props.openUserModal ? 'rotate(0deg)' : 'rotate(180deg)'};
        transition: transform 0.1s ease;
      }
    }
    .config{
      width: 40px;
      border: solid #eff1f3;
      border: ${props => props.isWhite ? 'solid #eff1f3' : 'solid #131C2D'};
      transition: border 0.3s ease;
      border-width: 0 1px 0 1px;
    }
    svg{
      color: rgb(112,112,112);
      pointer-events: none;
    }
  `,
  Logo: styled.ul`
    font-size: 0;
    height: 100%;
    img{
      height: auto;
      object-fit: contain;
    }
  `,
}

export default function AdminNav({ }: IAdminNav) {
  const { state, action } = useAdminContext();
  const userName = 'admin';
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openConfigModal, setOpenConfigModal] = useState(false);

  const handleUserModal = () => {
    if (openConfigModal) setOpenConfigModal(!openConfigModal);
    setOpenUserModal(!openUserModal)
  }

  const handleConfigModal = () => {
    if (openUserModal) setOpenUserModal(!openUserModal);
    setOpenConfigModal(!openConfigModal);;
  }

  return (
    <S.AdminNav>
      <S.Logo>
        <Link href={PAGE.MAIN.path}>
          <a>
            <Image className='main-logo' src="/images/main_logo.png" width={100} height={35} alt='main_logo' />
          </a>
        </Link>
      </S.Logo>

      <S.UserInfo openUserModal={openUserModal} isWhite={state.isWhite}>
        <li className='user' onClick={handleUserModal}>
          <span className='user__text'>{userName}</span>
          <i>
            <Icon name='arrowNoTailBottom' />
          </i>
        </li>
        <li className='config' onClick={handleConfigModal}>
          <i>
            <Icon name='config' />
          </i>
        </li>
      </S.UserInfo>
      <UserModal openUserModal={openUserModal} />
      <ConfigModal openConfigModal={openConfigModal} />
    </S.AdminNav>
  );
}
