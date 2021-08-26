import React from "react";
import styled from "styled-components";
import Link from "next/link";
import PAGE from "constants/path";
import { Text } from "constants/register";
import Button from "components/style/Button";
import Input from "components/style/Input";
import Title from "components/style/Title";
import Label from "components/style/Label";
import Select from "components/style/Select";
import DaumPost from 'components/Common/DaumPost';
import FieldsetTos from 'components/Auth/Register/FieldsetTos';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import { useRegisterContext } from 'context/RegisterProvider';

interface IRegister {
  className?: string;
  isModal: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const S = {
  Register: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    .container {
      margin: 0 auto;
      .form-box {
        legend {
          border-bottom: 1px solid #e7e7e7;
          color: #2e2e2e;
          width: 100%;
          padding: 10px 0;
          margin-bottom: 20px;
        }
      }
  }
  `,
  Group: styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .id-box {
      display: flex;
      justify-content: space-between;
      width: 300px;
    }
    .address-box {
      display: flex;
      flex-direction: column;
      &__inner{
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
      }
    }`,

}

export default function Register({ className, onClick, isModal }: IRegister) {
  const { state, action } = useRegisterContext()

  return (
    <S.Register className={className}>
      <article className='container'>
        <Title level={2} textAlign='left'>회원가입</Title>
        <form className='form-box'>
          <fieldset>
            <legend>기본정보</legend>
            <S.Group >
              <Label htmlFor='idFor' required>아이디</Label>
              <div className='id-box'>
                <Input width='170px' placeholder='영문소문자/숫자, 4~16자' name='userId' required={true} id='idFor' onChange={action.setFormData} />
                <Button width='80px' height='40px' fontSize='11px'>중복확인</Button>
              </div>
            </S.Group>

            <S.Group >
              <Label htmlFor='passwordFor' required>비밀번호</Label>
              <Input type='password' width='300px' placeholder='비밀번호' name='password' id='passwordFor' value={state.password} onChange={action.setFormData} />
            </S.Group>

            <S.Group>
              <Label htmlFor='passwordConfirmFor' required>비밀번호 확인</Label>
              <Input type='password' width='300px' placeholder='비밀번호' name='passwordConfirm' id='passwordConfirmFor' value={state.passwordConfirm} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='nameFor' required>이름</Label>
              <Input width='300px' placeholder='이름' id='nameFor' name='userName' value={state.userName} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='phoneFor' required>휴대전화</Label>
              <Select width='70'>
                <option>010</option>
              </Select>
              <span className='tests'>-</span>
              <Input width='80px' placeholder='휴대전화' name='' value='' onChange={() => { }} />
              <span className='tests'>-</span>
              <Input width='80px' placeholder='휴대전화' name='' value='' onChange={() => { }} />
            </S.Group>

            <S.Group >
              <Label htmlFor='emailFor' required>이메일</Label>
              <Input width='300px' placeholder='이메일' name='email' id='emailFor' value={state.email} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='addrFor' required>
                주소
              </Label>
              <div className='form-box__input-wrap address-box'>
                <div className='address-box__inner'>
                  <DaumPost isModal={isModal} />
                  <Input width='150px' name='zoneCode' value={state.zonecode} readOnly />
                  <Button type='button' width='80px' height='40px' fontSize='12px' onClick={onClick}>우편번호</Button>
                </div>
                <Input width='300px' placeholder='기본주소' name='addr1' value={state.addr1} readOnly margin="0 0 15px 0" />
                <Input width='300px' placeholder='나머지 주소' name='addr2' id='addrFor'  onChange={action.setFormData} value={state.addr2} />
              </div>
            </S.Group>
          </fieldset>

          <fieldset>
            <legend>추가정보</legend>
            <S.Group >
              <Label htmlFor='loginId' required>생년월일</Label>
              <Input width='250px' placeholder='주소' name='' value='' onChange={() => { }} />
            </S.Group>

            <S.Group >
              <Label htmlFor='loginId' >지역</Label>
              <Select width='250'>
                <option>as</option>
              </Select>
            </S.Group>
          </fieldset>

          {/* <fieldset>
            <legend>이용약관</legend>
            <FieldsetTos />
          </fieldset> */}
        </form>
      </article>


    </S.Register>
  );
};


