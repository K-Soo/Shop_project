import React, { useState,useEffect } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import Input from "components/style/Input";
import Button from "components/style/Button";
import { Post,Put } from 'api';
import { useSnackbar } from 'notistack';
import { useRouter } from "next/router";
import PAGE from 'constants/path';
import { validate } from 'utils';

const S = {
  FindPassword: styled.section`
    max-width: 350px;
    margin: 0 auto;
    button{
      height: 40px;
      font-size: 13px;
    }
  `,
  View: styled.div`
    border: 1px solid #999;
    background: #f9f9f9;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
      margin-top: 30px;
      width: 100px;
    }
  `,
}

const initFind = {
  userId: '',
  userName: '',
  email: ''
}

const initNewPassword = {
  currentPassword: '',
  newPassword1: '',
  newPassword2: ''
}

export default function FindPassword() {
  const [findPassword, setFindPassword] = useState(initFind);
  const [newPassword, setNewPassword] = useState(initNewPassword);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [confirmed, setConfirmed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    sessionStorage.removeItem('permanent_id');
  },[]);

  const handleAuthSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    closeSnackbar();
    if ([findPassword.userName, findPassword.email, findPassword.userId].includes('')) {
      return alert('정보를 모두 입력해주세요.');
    }
    try {
      const res = await Post.findUserPassword(findPassword);
      if (res.success) {
        setConfirmed(true);
        setFindPassword(initFind);
        sessionStorage.setItem('permanent_id',JSON.stringify(res.userId))
      }
    } catch (error) {
      enqueueSnackbar('존재하지않는 회원입니다.', { variant: 'error' });
    }
  };

  const handleNewPasswordSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    closeSnackbar();
    if ([newPassword.currentPassword, newPassword.newPassword1, newPassword.newPassword2].includes('')) {
      return enqueueSnackbar('정보를 모두 입력해주세요', { variant: 'info' });
    }

    if(!validate.password(newPassword.newPassword1)){
      return alert('숫자,영문자,특수문자 조합 8자리이상 입력해주세요.');
    }

    if(newPassword.newPassword1 !== newPassword.newPassword2){
      return enqueueSnackbar('비밀번호가 일치하지않습니다', { variant: 'error' });
    }
    const userId = JSON.parse(sessionStorage.getItem("permanent_id"));
    if(!userId) {
      enqueueSnackbar('잠시후 다시 시도해 주세요.', { variant: 'error' });
      return router.push(PAGE.MAIN.path);
    } 
    try {
      const res = await Put.updatePassword({...newPassword,userId});
      if (res.success) {
        sessionStorage.removeItem('permanent_id');
        alert('변경이 완료되었습니다.');
        router.push(PAGE.MAIN.path);
      }else{
        enqueueSnackbar('기존 비밀번호를 확인해주세요', { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar('존재하지않는 회원입니다.', { variant: 'error' });
    }
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFindPassword({
      ...findPassword,
      [name]: value,
    });
  };

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  return (
    <S.FindPassword>
      {confirmed ? (
        <>
          <PageTitle TitleText='새로운 비밀번호' />
          <form onSubmit={handleNewPasswordSubmit}>
            <fieldset >
              <Input
                placeholder='기존 비밀번호'
                name='currentPassword'
                onChange={handleNewPassword}
                type='password'
                margin='0 0 10px 0'
                value={newPassword.currentPassword}
              />
              <Input
                name='newPassword1'
                placeholder='새로운 비밀번호'
                onChange={handleNewPassword}
                type='password'
                margin='0 0 10px 0'
                value={newPassword.newPassword1}
              />
              <Input
                name='newPassword2'
                placeholder='비밀번호 재입력'
                onChange={handleNewPassword}
                type='password'
                margin='0 0 10px 0'
                value={newPassword.newPassword2}
              />
            </fieldset>
            <Button login type='submit'>확인</Button>
          </form>
        </>
      ) : (
        <>
          <PageTitle TitleText='비밀번호 찾기' />
          <form onSubmit={handleAuthSubmit}>
            <fieldset >
              <Input
                placeholder='아이디'
                name='userId'
                onChange={handleChangeLogin}
                margin='0 0 10px 0'
                value={findPassword.userId}
              />
              <Input
                name='userName'
                placeholder='이름'
                onChange={handleChangeLogin}
                margin='0 0 10px 0'
                value={findPassword.userName}
              />
              <Input
                name='email'
                placeholder='이메일'
                onChange={handleChangeLogin}
                margin='0 0 10px 0'
                value={findPassword.email}
              />
            </fieldset>
            <Button login type='submit'>이메일로 찾기</Button>
          </form>
        </>
      )}
    </S.FindPassword>
  );
}
