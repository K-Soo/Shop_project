import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "components/style/Button";
import { useRouter } from "next/router";
import { Post } from 'api';
import { customCookie } from 'utils';
import { useAppContext } from 'context/AppProvider';
import PageTitle from 'components/Common/PageTitle';
import Input from "components/style/Input";
import NonMemBox from 'components/Auth/Login/NonMemBox';
import QuickBox from 'components/Auth/Login/QuickBox';

const S = {
  Login: styled.section`
    max-width: 350px;
    margin: 0 auto;
    .security{
      margin: 10px 0;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }
  `,
}

const initLogin = {
  userId: '',
  password: '',
}

export default function Login() {
  const [login, setLogin] = useState<{ userId: string, password: string }>(initLogin);
  const { action } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if([login.userId,login.password].includes('')){
      return alert('로그인 정보를 모두 입력해주세요.');
    }
    try {
        const res = await Post.login({ userId: login.userId, password: login.password });
        console.log('res: ', res);
        customCookie.set("access_token", res.token);
        if (res.basket?.items) {
          action.setLocalItems(res.basket.items);
        }
        action.InitData('status.user' ,true);
        router.push("/");
    } catch (error) {
      console.error('login: ', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setLogin({
      ...login,
      [name]: value,
    })
  }

  return (
    <S.Login >
      <PageTitle TitleText='로그인' />

      <form onSubmit={handleSubmit}>
        <fieldset >
          <Input placeholder='아이디' margin='0 0 10px 0' name='userId' onChange={handleChange} />
          <Input placeholder='비밀번호' type='password' name='password' onChange={handleChange} />
        </fieldset>

        <fieldset className='security'>
          <span >보안접속</span>
          <span >아이디 저장</span>
        </fieldset>
        <Button login type='submit'>로그인</Button>
      </form>
      <NonMemBox />
      <QuickBox />
    </S.Login>
  );
};

