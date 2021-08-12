import React from 'react';
import DaumPostcode, { AddressData } from 'react-daum-postcode';
import styled from "styled-components";


interface IDaumPost {
  className?: string;
  isModal: boolean;
}

const StyledDaumPost = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid #999;
`;

const DaumPost: React.FC<IDaumPost> = (props) => {
  const postCodeStyle = {
    // display: "block",
    // top: "50px",
    width: "500px",
    // zIndex: "100",
    // height: '500px'
  }


  const handleComplete = (data: AddressData) => {
    const { address, addressType, bname, buildingName } = data;

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
    // console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  return (
    <>
      {props.isModal && (
        <StyledDaumPost>
          <DaumPostcode onComplete={handleComplete} autoClose={true} style={postCodeStyle} autoResize={false} />
        </StyledDaumPost>
      )}
    </>
  );
}
export default DaumPost;