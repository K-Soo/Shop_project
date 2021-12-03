import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "components/style/Button";
import Input from "components/style/Input";
import Label from "components/style/Label";
import Select from "components/style/Select";
import DaumPost from 'components/Common/DaumPost';
import FieldsetTos from 'components/Auth/Register/FieldsetTos';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import { useRegisterContext } from 'context/RegisterProvider';
import { useAppContext } from 'context/AppProvider';
import { Post, Put } from 'api';
import PageTitle from 'components/Common/PageTitle';
import Icon from 'components/Icon/Icon';
import { useRouter, NextRouter } from 'next/router';
import { idCheck, passwordCheck, allTermCheck } from 'components/validation';
import { PHONE_NUMBER } from 'constants/phone';
import { onlyNum } from 'utils';
import axios from 'axios';
import PAGE from 'constants/path';
import { validate } from 'utils';

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
  Group: styled.div<{ margin?: string, status?: boolean }>`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    max-width: 400px;
    label{
      min-width: 70px;
      width: 70px;
    }
    .id-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .address-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      &__inner{
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        button{
          display: flex;
          align-items: center;
        span{
          pointer-events: none;
        }
        i{
          font-size: 0;
          pointer-events: none;
          svg{
            color: #000;
            width: 18px;
            height: 16px;
          }
        }
      }
    }
  }
  `,
  statusText: styled.p<{ status: boolean }>`
    font-size: 12px;
    padding-left: 80px;
    margin-top: -10px;
    margin-bottom: 5px;
    ${props => props.status ? css`
    color: green;
    ::after{
      content: '사용 가능한 ID입니다.';
    }
    ` : css`
    color: red;
    ::after{
      content: '이미 가입된 ID입니다.';
    }
    `};
  `,
  ButtonBox: styled.div`
    display: flex;
    max-width: 350px;
    margin: 50px auto;
    button{
      height: 40px;
      font-size: 14px;
    }
  `,
}

export default function Register() {
  const [status, setStatus] = useState<boolean | null>(null);
  const { state, action } = useRegisterContext();
  const App = useAppContext();
  const router: NextRouter = useRouter();
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const addrDetailRef = useRef<HTMLInputElement>(null);
  const [isNotModify, setIsNotModify] = useState(false);

  useEffect(() => {
    if (router.asPath === '/auth/register') setIsNotModify(true);
  }, [router.asPath])

  useEffect(() => {
    if (state.isDuplicateId) setStatus(null);
  }, [state.form.userId, state.isDuplicateId]);


  let formData = {
    ...state.form,
  }
  delete formData.passwordConfirm

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if ([state.TemporaryPhone1.trim(), state.TemporaryPhone2.trim(), state.TemporaryPhone3.trim()].includes('')) {
      return alert('휴대폰 번호를 입력해주세요.');
    }
    if ([state.form.userName.trim()].includes('')) {
      alert('이름을 입력해주세요.');
      return userNameRef.current.focus();
    }

    if ([state.form.zonecode.trim(), state.form.addr1.trim()].includes('')) {
      return alert('주소정보를 입력해주세요');
    }
    if ([state.form.addr2.trim()].includes('')) {
      alert('나머지 주소를 입력해주세요.');
      return addrDetailRef.current.focus();
    }

    if (isNotModify) {
      // 회원가입 폼
      if (status === false) {
        alert('이미 가입된 아이디입니다.');
        return userIdRef.current.focus();
      }
      if (!idCheck(state)) return;

      if(!validate.password(state.form.password)){
        return alert('숫자,영문자,특수문자 조합 8자리이상 입력해주세요.');
      }
 
      if(!validate.MixedPassword(state.form.password)){
        return alert("숫자와 영문자를 혼용하여야 합니다.");
      }
      if (!passwordCheck(state)) {
        action.InitData('form.password');
        action.InitData('form.passwordConfirm');
        return passwordRef.current.focus();
      }

      if (!validate.name(state.form.userName)) {
        alert('한글단어만 입력가능합니다.');
        return userNameRef.current.focus();
      }

      if (!allTermCheck(state)) return;
      try {
        const res = await Post.register(formData);
        if (res.success) alert('가입이 완료되었습니다.');
        router.push(PAGE.MAIN.path);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Register-error: ', error);
          alert(error.response.data.message);
        }
      }
    } else {
      try {
        const res = await Put.updateUserInfo(App.state.userInfo.idx,{
          phone: state.form.phone,
          email: state.form.email,
          zonecode: state.form.zonecode,
          addr1: state.form.addr1,
          addr2: state.form.addr2,
        });
        if(res.success){
         alert('정보가 변경되었습니다.');
         router.push(PAGE.MAIN.path);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Register-error: ', error);
          alert(error.response.data.message);
        }
      }
    }
  };

  const DuplicateCheckId = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validate.id(state.form.userId)) {
      alert("아이디는 영소문자, 숫자 6~20자리로 입력해주세요.");
      return userIdRef.current.focus();
    }
    if (!state.form.userId) return alert('아이디를 입력해주세요.');
    try {
      const res = await Post.checkId({ userId: state.form.userId });
      if (res.success) {
        action.setData('isDuplicateId', false);
      } else {
        action.setData('isDuplicateId', true);
      }
      setStatus(res.success);
    } catch (error) {
      console.log('Register-error: ', error);
    }
  };

  return (
    <S.Register >
      <article className='container'>
        <PageTitle TitleText={isNotModify ? '회원가입' : '회원정보 수정'} />
        <form className='form-box' onSubmit={handleSubmit}>
          <fieldset>
            <legend>기본정보</legend>
            <S.Group margin='0px' status={status}>
              <Label htmlFor='idFor' required>아이디</Label>
              <div className='id-box'>
                <Input
                  maxWidth='200'
                  placeholder='영문소문자/숫자, 4~16자'
                  name='form.userId'
                  id='idFor'
                  margin='0 20px 0 0'
                  maxLength={16}
                  onChange={action.setFormData}
                  value={state.form.userId}
                  refValue={userIdRef}
                  readOnly={!isNotModify}
                />
                {isNotModify && <Button white width='80px' height='40px' fontSize='11px' onClick={DuplicateCheckId}>중복확인</Button>}
              </div>
            </S.Group>

            {status !== null && (
              <S.statusText status={status} />
            )}
            {isNotModify && (
              <>
                <S.Group >
                  <Label htmlFor='passwordFor' required>비밀번호</Label>
                  <Input type='password' refValue={passwordRef} placeholder='숫자,영문자,특수문자 조합8자리 이상' name='form.password' id='passwordFor' value={state.form.password} onChange={action.setFormData} />
                </S.Group>

                <S.Group>
                  <Label htmlFor='passwordConfirmFor' required>비밀번호확인</Label>
                  <Input type='password' placeholder='숫자,영문자,특수문자 조합8자리 이상' name='form.passwordConfirm' id='passwordConfirmFor' value={state.form.passwordConfirm} onChange={action.setFormData} />
                </S.Group>
              </>
            )}

            <S.Group >
              <Label htmlFor='nameFor' required>이름</Label>
              <Input readOnly={!isNotModify} minLength={2} refValue={userNameRef} maxWidth='200' placeholder='한글 2~5자' id='nameFor' name='form.userName' value={state.form.userName} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='phoneFor' required>휴대전화</Label>
              <Select width='100' height='40' name='TemporaryPhone1' value={state.TemporaryPhone1} onChange={action.setFormData}>
                <option value=''>선택</option>
                {PHONE_NUMBER.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </Select>
              <span style={{ width: '15px', textAlign: 'center' }}>-</span>
              <Input required maxWidth='100' name='TemporaryPhone2' maxLength={4} minLength={3} value={state.TemporaryPhone2} id='phoneFor' onChange={e => onlyNum(e, action.setFormData)} />
              <span style={{ width: '15px', textAlign: 'center' }}>-</span>
              <Input required maxWidth='100' maxLength={4} minLength={4} name='TemporaryPhone3' value={state.TemporaryPhone3} onChange={e => onlyNum(e, action.setFormData)} />
            </S.Group>

            <S.Group >
              <Label htmlFor='emailFor' required>이메일</Label>
              <Input placeholder='이메일' name='TemporaryEmail1' id='emailFor' value={state.TemporaryEmail1} onChange={action.setFormData} />
              <span style={{ width: '20px', textAlign: 'center' }}>@</span>
              <Input name='TemporaryEmail2' value={state.TemporaryEmail2} onChange={action.setFormData} />
            </S.Group>

            <S.Group >
              <Label htmlFor='addrFor' required>
                주소
              </Label>
              <div className='form-box__input-wrap address-box'>
                <div className='address-box__inner'>
                  {App.state.openDaumPost && <DaumPost />}
                  <Input name='form.zoneCode' maxWidth='200' margin='0 20px 0 0' value={state.form.zonecode} readOnly />
                  <Button
                    white
                    width='90px'
                    height='40px'
                    fontSize='12px'
                    name='openDaumPost'
                    onClick={App.action.setGlobalToggle}
                  >
                    <i><Icon name='location' /></i>
                    <span>우편번호</span>
                  </Button>
                </div>
                <Input placeholder='기본주소' name='form.addr1' value={state.form.addr1} readOnly margin="0 0 15px 0" />
                <Input placeholder='나머지 주소' refValue={addrDetailRef} name='form.addr2' id='addrFor' onChange={action.setFormData} value={state.form.addr2} />
              </div>
            </S.Group>
          </fieldset>


          {isNotModify && (
            <fieldset>
              <legend>이용약관</legend>
              <FieldsetTos />
            </fieldset>
          )}

          <S.ButtonBox>
            <Button black type='submit'>{isNotModify ? '가입' : '수정하기'}</Button>
            <Button white type='button' width='200px' onClick={() => router.push('/')}>취소</Button>
          </S.ButtonBox>

        </form>
      </article>
    </S.Register>
  );
};


