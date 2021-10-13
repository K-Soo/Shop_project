import React from 'react';
import DaumPostcode, { AddressData } from 'react-daum-postcode';
import styled from "styled-components";
import { useRegisterContext } from 'context/RegisterProvider';
import Icon from 'components/Icon/Icon';
import { useAppContext } from 'context/AppProvider';
import { NextRouter, useRouter } from 'next/router';

const S = {
  DaumPost: styled.div`
    position: fixed;
    top: 10%;
    left: 50%;
    width: 50%;
    transform: translate(-50%);
    border: 1px solid #222;
    background-color: #fff;
    ${({ theme }) => theme.mobile`
      width: auto;
    `}
  `,
  Header: styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #999;
    height: 50px;
    padding: 0 15px;
    button{
      all:unset;
      padding: 5px;
      cursor: pointer;
      font-size: 0;
    svg{
      color: #333;
    }
  }
  `,
}
export default function DaumPost() {
  const { action } = useRegisterContext();
  const App = useAppContext();
  const router: NextRouter = useRouter();

  const postCodeStyle = {
    // top: "50px",
    height: "600px",
  }

  const handleComplete = (data: AddressData) => {
    const { address, addressType, bname, buildingName, zonecode } = data;
    let fullAddress = address;
    let extraAddress = '';
    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }
      if (buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${buildingName}` : buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    if (router.asPath === "/auth/register" || router.asPath === "/users/modify") {
      action.setData('form.zonecode', zonecode);
      action.setData('form.addr1', fullAddress);
      App.action.InitData('openDaumPost', false);
    }
  }

  return (
    <S.DaumPost>
      <S.Header>
        <button name='openDaumPost' onClick={App.action.setGlobalToggle} type='button'>
          <Icon name='close' />
        </button>
      </S.Header>
      <DaumPostcode 
        onComplete={handleComplete} 
        autoClose={true} 
        style={postCodeStyle} 
        autoResize={true} 
        animation={true} 
      />
    </S.DaumPost>
  );
}