import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import Input from "components/style/Input";
import Button from "components/style/Button";
import { Post } from 'api';
import { useSnackbar } from 'notistack';
import { useRouter } from "next/router";
import PAGE from 'constants/path';

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
  userId:'',
  userName: '',
  email: ''
}

export default function FindPassword() {
  const [findPassword, setFindPassword] = useState(initFind);
  const [data, setData] = useState<string | null>(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    closeSnackbar();
    if ([findPassword.userName, findPassword.email,findPassword.userId].includes('')) {
      return alert('정보를 모두 입력해주세요.');
    }
    try {
      const res = await Post.findUserPassword(findPassword);
      console.log('res: ', res);
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

  return (
    <S.FindPassword>
      <PageTitle TitleText='비밀번호 찾기' />
      {data ? (
        <S.View>
          {/* <p>회원님의 아이디는 <strong>{data}</strong> 입니다</p> */}
          <Button 
            login 
            onClick={() => router.push(PAGE.MAIN.path)}
          >
            메인으로
          </Button>
        </S.View>
      ) : (
        <form onSubmit={handleSubmit}>
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
      )}
    </S.FindPassword>
  );
}
