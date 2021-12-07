import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Aside from 'components/Admin/Aside';
import Title from 'components/style/Title';
import Input from 'components/style/Input';
import Button from 'components/style/Button';
import { useAdminContext } from 'context/AdminProvider';
import { Post } from 'api';
import { customCookie } from 'utils';
import { NextRouter, useRouter } from 'next/router';

const S = {
  LoginControllers: styled.div`
    margin-top: -40px;
    height: 100vh;
    background-color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Content: styled.div`
    margin: 0 10px;
    height: 250px;
    width: 300px;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    .form-box{
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }
  `,
}

export default function LoginControllers() {
  const { state, action } = useAdminContext();
  const router: NextRouter = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if ([state.user.id, state.user.password].includes('')) {
      return alert('로그인 정보를 모두 입력해주세요.');
    }
    const obj = {
      userId: state.user.id,
      password: state.user.password,
    }
    try {
      const res = await Post.login(obj);
      console.log('res: ', res);
      if(res.success){
        customCookie.set("access_token_a", res.token);
        router.push('/admin');
      }
    } catch (error) {
      alert('로그인 정보가 정확하지않습니다.');
    }
  }

  return (
    <S.LoginControllers>
      <S.Content>
        <form onSubmit={handleSubmit} className='form-box'>
          <fieldset>
            <Title level={6} marginB='20'>
              LOGIN
            </Title>
            <Input
              name='user.id'
              margin='0 0 10px 0'
              placeholder='아이디'
              onChange={action.setFormData}
            />
            <Input name='user.password'
              margin='0 0 10px 0'
              placeholder='비밀번호'
              type='password'
              onChange={action.setFormData}
            />
          </fieldset>
          <Button black type='submit'>로그인</Button>
        </form>
      </S.Content>
    </S.LoginControllers >
  );
}
