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
  FindId: styled.section`
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
  userName: '',
  email: ''
}

export default function FindId() {
  const [findId, setFindId] = useState(initFind);
  const [data, setData] = useState<string | null>(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    closeSnackbar();
    if ([findId.userName, findId.email].includes('')) {
      return alert('정보를 모두 입력해주세요.');
    }
    try {
      const res = await Post.findUserId(findId);
      if (res.success) {
        setData(res.userId);
      }
    } catch (error) {
      enqueueSnackbar('존재하지않는 회원입니다.', { variant: 'error' });
    }
  };
  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFindId({
      ...findId,
      [name]: value,
    });
  };

  return (
    <S.FindId>
      <PageTitle TitleText='아이디 찾기' />
      {data ? (
        <S.View>
          <p>회원님의 아이디는 <strong>{data}</strong> 입니다</p>
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
              placeholder='이름'
              name='userName'
              onChange={handleChangeLogin}
              margin='0 0 10px 0'
              value={findId.userName}
            />
            <Input
              name='email'
              placeholder='이메일'
              onChange={handleChangeLogin}
              margin='0 0 10px 0'
              value={findId.email}
            />
          </fieldset>
          <Button login type='submit'>이메일로 찾기</Button>
        </form>
      )}
    </S.FindId>
  );
}
