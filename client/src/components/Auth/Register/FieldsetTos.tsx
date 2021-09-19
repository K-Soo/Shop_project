import React from 'react';
import styled from 'styled-components';
import TextArea from "components/style/TextArea";
import { Text } from "constants/register";
import Title from "components/style/Title";
import CheckBox from 'components/style/CheckBox';
import { useRegisterContext } from 'context/RegisterProvider';

const TextAreaBlock = styled.div`
  width: 100%;
  padding: 20px 15px;
  border: 1px solid #e7e7e7e7;
  background-color: #fafafa;
`;

const CheckBlock = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;

const TotalCheck = styled.div`
  border: 1px solid #e7e7e7e7;
  background-color: #fafafa;
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &::after{
    margin: 0 15px 0 0;
    height:40px;
    line-height: 42px;
    content: '이용약관 및 개인정보수집 및 이용에 모두 동의합니다.'
  }
  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;

export default function FieldsetTos() {
  const { state, action } = useRegisterContext();

  return (
    <>
      <div className='form-box__input-wrap'>
        <TextAreaBlock >
          <Title level={3} size='12' textAlign='left' marginB='10' >[필수] 이용약관 동의</Title>
          <TextArea value={Text.TOS} readOnly />
          <CheckBlock>
            <span>이용약관에 동의하십니까?</span>
            <CheckBox 
              marginL='10' 
              name='TermsOfService' 
              onChange={action.setCheckBox} 
              checked={state.TermsOfService}
            />
          </CheckBlock>
        </TextAreaBlock>
      </div>

      <div className='form-box__input-wrap'>
        <TextAreaBlock >
          <Title level={3} size='12' textAlign='left' marginB='10' >[필수] 개인정보 수집 및 이용 동의</Title>
          <TextArea value={Text.TOS} readOnly />
          <CheckBlock>
            <span>개인정보 수집 및 이용에 동의하십니까?</span>
            <CheckBox 
              marginL='10' 
              name='PersonalInfo' 
              onChange={action.setCheckBox} 
              checked={state.PersonalInfo}
            />
          </CheckBlock>
        </TextAreaBlock>
      </div>
      <TotalCheck>
        <CheckBox 
          marginR='10' 
          name='allCheck' 
          onChange={action.setCheckBox} 
          checked={state.PersonalInfo && state.TermsOfService}
        />
      </TotalCheck>
    </>
  )
};
