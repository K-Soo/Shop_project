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
import {Post} from 'api';
import PageTitle from 'components/Common/PageTitle';

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
    /* flex-wrap: wrap; */
    align-items: center;
    max-width: 400px;
    /* border: 1px solid red; */
    .id-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .address-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid red;
      &__inner{
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
      }
    }`,

}

export default function Register({ className, onClick, isModal }: IRegister) {
  const { state, action } = useRegisterContext();

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    try {
      (async () => {
        const res = await Post.register({userId: "llssll",password:'llssll'});
        console.log('res: ', res.headers);
      })();
    } catch (error) {
      console.error('login: ', error);
    }
  };

  return (
    <S.Register className={className}>
      <article className='container'>
      <PageTitle TitleText='회원가입'/>
        <form className='form-box' onSubmit={handleSubmit}>
          <fieldset>
            <legend>기본정보</legend>
            <S.Group >
              <Label htmlFor='idFor' required>아이디</Label>
              <div className='id-box'>
                <Input maxWidth='200' placeholder='영문소문자/숫자, 4~16자' name='userId' required={true} id='idFor' margin='0 20px 0 0' onChange={action.setFormData} />
                <Button white width='80px' height='40px' fontSize='11px'>중복확인</Button>
              </div>
            </S.Group>

            <S.Group >
              <Label htmlFor='passwordFor' required>비밀번호</Label>
              <Input type='password'  placeholder='비밀번호' name='password' id='passwordFor' value={state.password} onChange={action.setFormData} />
            </S.Group>

            <S.Group>
              <Label htmlFor='passwordConfirmFor' required>비밀번호 확인</Label>
              <Input type='password'  placeholder='비밀번호' name='passwordConfirm' id='passwordConfirmFor' value={state.passwordConfirm} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='nameFor' required>이름</Label>
              <Input maxWidth='200' placeholder='이름' id='nameFor' name='userName' value={state.userName} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='phoneFor' required>휴대전화</Label>
              <Select width='80px' height='40'>
                <option value='010'>010</option>
                <option value='011'>011</option>
                <option value='016'>016</option>
                <option value='017'>017</option>
                <option value='018'>018</option>
                <option value='019'>019</option>
              </Select>
              <span className='tests'>-</span>
              <Input width='80' name='' value='' onChange={() => { }} />
              <span className='tests'>-</span>
              <Input width='80' name='' value='' onChange={() => { }} />
            </S.Group>

            <S.Group >
              <Label htmlFor='emailFor' required>이메일</Label>
              <Input placeholder='이메일' name='email' id='emailFor' value={state.email} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='addrFor' required>
                주소
              </Label>
              <div className='form-box__input-wrap address-box'>
                <div className='address-box__inner'>
                  <DaumPost isModal={isModal} />
                  <Input name='zoneCode' maxWidth='200' margin='0 20px 0 0' value={state.zonecode} readOnly />
                  <Button white width='80px' height='40px' fontSize='12px' onClick={onClick}>우편번호</Button>
                </div>
                <Input placeholder='기본주소' name='addr1' value={state.addr1} readOnly margin="0 0 15px 0" />
                <Input placeholder='나머지 주소' name='addr2' id='addrFor' onChange={action.setFormData} value={state.addr2} />
              </div>
            </S.Group>
          </fieldset>

          <fieldset>
            <legend>이용약관</legend>
            <FieldsetTos />
          </fieldset>

        <Button login>가입</Button>
        </form>
      </article>

    </S.Register>
  );
};


