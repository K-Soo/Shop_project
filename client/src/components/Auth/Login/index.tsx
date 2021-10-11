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

interface ILogin {
  type: string;
}

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
  LoginTap: styled.ul<{ users: string }>`
    display: flex;
    height: 30px;
    margin-bottom:15px;
    font-size: 12px;
    li{
      flex: 1;
      height: 100%;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      &:nth-child(1){
        border: ${props => props.users === 'member' ? 'solid #dee2e6' : 'solid #dee2e6'};
        border-width: ${props => props.users === 'member' ? '1px 1px 0 1px' : '0 0 1px 0'};
        background-color: ${props => props.users === 'member' ? '#fff' : '#f9f9f9'};
      }
      &:nth-child(2){
        border: ${props => props.users === 'nonMember' ? 'solid #dee2e6' : 'solid #dee2e6'};
        border-width: ${props => props.users === 'nonMember' ? '1px 1px 0 1px' : '0 0 1px 0'};
        background-color: ${props => props.users === 'nonMember' ? '#fff' : '#f9f9f9'};
      }
    }
  `,
}

const initLogin = {
  userId: '',
  password: '',
}

type TUusers = 'member' | 'nonMember';

const category = [
  { label: '회원', value: 'member' },
  { label: '비회원', value: 'nonMember' },
]

export default function Login({ type }: ILogin) {
  const [login, setLogin] = useState<{ userId: string, password: string }>(initLogin);
  const [users, setUsers] = useState<TUusers>('member');
  console.log('users: ', users);
  const { action } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if ([login.userId, login.password].includes('')) {
      return alert('로그인 정보를 모두 입력해주세요.');
    }
    try {
      const res = await Post.login({ userId: login.userId, password: login.password });
      customCookie.set("access_token", res.token);
      if (res.basket?.items) action.setLocalItems(res.basket.items);
      localStorage.removeItem('unknown-basket');
      localStorage.removeItem('guest');
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
  const handleCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    const { className } = e.target as HTMLLIElement;
    setUsers(className as TUusers);
  }

  return (
    <S.Login >
      <PageTitle TitleText='로그인' />
      {type == 'history' && (
        <S.LoginTap users={users}>
          {category.map(d => (
            <li key={d.value} className={d.value} onClick={handleCategory}>{d.label}</li>
          ))}
        </S.LoginTap>
      )}


    {users === 'member' && (
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
        <QuickBox />
      </form>
     )}

      {type === 'history' && users === 'nonMember' && (
        <form onSubmit={handleSubmit}>
          <fieldset >
            <Input placeholder='주문자명' margin='0 0 10px 0' name='userId' onChange={handleChange} />
            <Input placeholder='주문번호 하이픈(-)포함' margin='0 0 10px 0' name='password' onChange={handleChange} />
            <Input placeholder='비회원 패스워드' margin='0 0 10px 0' type='password' name='password' onChange={handleChange} />
          </fieldset>

          <Button login type='submit'>조회</Button>

          <p style={{fontSize: '12px',marginTop: '10px', color: '#757575'}}>비회원인 경우 주문번호로 주문조회만 가능합니다.</p>
        </form>
      )}

      {type === 'order' && <NonMemBox />}
    </S.Login>
  );
};

