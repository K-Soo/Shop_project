import React from 'react';
import styled from 'styled-components';
import TextArea from "components/style/TextArea";
import { Text } from "../../../../utils/constants/register";
import Title from "components/style/Title";
import Icon from 'components/Icon/Icon';

interface IFieldsetTos {
  className?: string;
}

const TextAreaBlock = styled.div`
  width: 100%;
  padding: 20px 15px;
  border: 1px solid #e7e7e7e7;
  background-color: #fafafa;
`;

const CheckBlock = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: stretch;

  .icon-wrap{
    padding-left: 10px;
    display: inline-flex;
    align-items: stretch;
    &::after{
      content: '동의함';
      padding-left: 3px;
    }
  }
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
    margin: 0 15px 0 5px;
    height:40px;
    line-height: 42px;
    content: '이용약관 및 개인정보수집 및 이용에 모두 동의합니다.'
  }
  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;

const FieldsetTos: React.FC<IFieldsetTos> = ({ className }) => {
  return (
    <>
      <div className='form-box__input-wrap'>
        <TextAreaBlock >
          <Title level={3} size='12' textAlign='left' marginB='10' >[필수] 이용약관 동의</Title>
          <TextArea value={Text.TOS} />
          <CheckBlock>
            <span>이용약관에 동의하십니까?</span>
          </CheckBlock>
        </TextAreaBlock>
      </div>

      <div className='form-box__input-wrap'>
        <TextAreaBlock >
          <Title level={3} size='12' textAlign='left' marginB='10' >[필수] 개인정보 수집 및 이용 동의</Title>
          <TextArea value={Text.TOS} />
          <CheckBlock>
            <span>개인정보 수집 및 이용에 동의하십니까?</span>
            <span className='icon-wrap'>
              <Icon name='check' TosIcon />
            </span>
          </CheckBlock>
        </TextAreaBlock>
      </div>
      <TotalCheck>
      <Icon name='check' TosIcon style={{width:'25px',height:'25px'}}/>
    </TotalCheck>
    </>
  )
};


export default FieldsetTos;