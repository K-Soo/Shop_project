import React from "react";
import styled from "styled-components";
import HamburgerIcon from 'components/Common/HamburgerIcon';
import { useAdminContext } from 'context/AdminProvider';
import Image from "next/image";
import Link from 'next/link';
import PAGE from 'constants/path';
interface IAdminNav {

}

const S = {
  AdminNav: styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    .burger-icon{
      display: none;
    }
    ${props => props.theme.mobile`
      padding: 0 10px 0 15px;
      .burger-icon{
        display: flex;
      }
    `}
  `,
  UserInfo: styled.div`
  `,
  Logo: styled.div`
    font-size: 0;
    height: 100%;
    img{
      height: auto;
      object-fit: contain;
    }
    ${props => props.theme.mobile`
      display: none;
    `}
  `,
}

export default function AdminNav({ }: IAdminNav) {
  const { state, action } = useAdminContext();

  return (
    <S.AdminNav>
      <HamburgerIcon toggle={state.sideOpen} onClick={action.sideOpen} className='burger-icon'/>

      <S.Logo>
        <Link href={PAGE.ADMIN_MAIN.path}>
          <a>
            <Image className='main-logo' src="/images/main_logo.jpeg" width={100} height={40} alt='main_logo' />
          </a>
        </Link>
      </S.Logo>

      <S.UserInfo >
        <span>
          관리자님 안녕
        </span>
      </S.UserInfo>
    </S.AdminNav>
  );
}
