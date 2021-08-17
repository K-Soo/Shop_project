import React from 'react';
import DaumPostcode, { AddressData } from 'react-daum-postcode';
import styled from "styled-components";
import { useRegisterContext } from 'context/RegisterProvider';

interface IDaumPost {
  isModal: boolean;
}

const S = {
  DaumPost: styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid #999;
`,
}
export default function DaumPost(props: IDaumPost) {
  const { action } = useRegisterContext();
  const postCodeStyle = {
    // display: "block",
    // top: "50px",
    width: "500px",
    // zIndex: "100",
    // height: '500px'
  }


  const handleComplete = (data: AddressData) => {
    const { address, addressType, bname, buildingName, zonecode } = data;
    console.log('data: ', data);

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
    action.setData('zonecode', zonecode);
    action.setData('addr1', fullAddress);
  }

  return (
    <>
      {props.isModal && (
        <S.DaumPost>
          <DaumPostcode onComplete={handleComplete} autoClose={true} style={postCodeStyle} autoResize={false} />
        </S.DaumPost>
      )}
    </>
  );
}