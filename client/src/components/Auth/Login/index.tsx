import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "components/style/Button";
import { useRouter } from "next/router";
import { Post } from 'api';
import { customCookie } from 'utils';
import { useAppContext } from 'context/AppProvider';
import PageTitle from 'components/Common/PageTitle';
import Input from "components/style/Input";
import NonMemBox from 'components/Auth/Login/NonMemBox';
import QuickBox from 'components/Auth/Login/QuickBox';
import useDidMountEffect from 'hooks/useDidMountEffect';
import PAGE from 'constants/path';
import { useSnackbar } from 'notistack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

interface ILogin {
  type: string;
}

const S = {
  Login: styled.section`
    max-width: 350px;
    margin: 0 auto;
    .security{
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .ctr-label{
        margin: 0;
        display: flex;
        align-items: center;
        .check{
          padding: 5px;
        }
        .css-ahj2mt-MuiTypography-root{
          font-size: 13px;
        }
      }
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

const initOrderFind = {
  userName: '',
  orderNum: '',
  orderPassword: '',
}

type TUusers = 'member' | 'nonMember';

const category = [
  { label: '회원', value: 'member' },
  { label: '비회원', value: 'nonMember' },
]

export default function Login({ type }: ILogin) {
  const [login, setLogin] = useState(initLogin);
  const [orderFind, setOrderFind] = useState(initOrderFind);
  const [users, setUsers] = useState<TUusers>('member');
  const [rememberId, setRememberId] = useState(false);
  const { action } = useAppContext();
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const existId = JSON.parse(localStorage.getItem("remember_id"));
    if (existId) {
      setRememberId(true);
      setLogin({ ...login, userId: existId });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDidMountEffect(() => {
    setLogin(initLogin);
    setOrderFind(initOrderFind);
  }, [users]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    closeSnackbar();
    if ([login.userId, login.password].includes('')) {
      return alert('로그인 정보를 모두 입력해주세요.');
    }
    try {
      const res = await Post.login({ userId: login.userId, password: login.password });
      console.log('res: ', res);
      if (res.success) {
        customCookie.set("access_token", res.token);
        if (res.basket?.items) action.setLocalItems(res.basket.items);
        localStorage.removeItem('unknown-basket');
        localStorage.removeItem('guest');
        if (rememberId) {
          localStorage.setItem('remember_id', JSON.stringify(login.userId));
        }
        router.push(PAGE.MAIN.path);
      }
    } catch (error) {
      enqueueSnackbar('아이디 또는 비밀번호를 확인해주세요.', { variant: 'error' });
    }
  };

  const handleGuestSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if ([orderFind.userName, orderFind.orderPassword, orderFind.orderNum].includes('')) {
      return alert('주문정보를 모두 입력해주세요.');
    }
    try {
      const res = await Post.guestLogin(orderFind);
      if (res.success) router.push(PAGE.MAIN.path);
    } catch (error) {
      alert('주문정보를 다시확인해주세요');
      console.error('login: ', error);
    }
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleChangeGuest = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setOrderFind({
      ...orderFind,
      [name]: value,
    });
  };

  const handleCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    const { className } = e.target as HTMLLIElement;
    setUsers(className as TUusers);
  };

  const handleRememberId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setRememberId(isChecked);
    } else {
      setRememberId(isChecked);
      localStorage.removeItem('remember_id');
    }
  }

  return (
    <S.Login >
      <PageTitle TitleText='로그인' />

      {type === 'history' && (
        <S.LoginTap users={users}>
          {category.map(d => (
            <li key={d.value} className={d.value} onClick={handleCategory}>{d.label}</li>
          ))}
        </S.LoginTap>
      )}

      {users === 'member' && (
        <form onSubmit={handleSubmit}>
          <fieldset >
            <Input placeholder='아이디' margin='0 0 10px 0' name='userId' value={login.userId} onChange={handleChangeLogin} />
            <Input placeholder='비밀번호' type='password' name='password' value={login.password} onChange={handleChangeLogin} />
          </fieldset>

          <fieldset className='security'>
            <FormControlLabel
              className='ctr-label'
              labelPlacement="start"
              control={<Switch defaultChecked size="small" color="default" />}
              label="보안접속"
            />
            <FormControlLabel
              className='ctr-label'
              labelPlacement="start"
              control={<Checkbox className='check' color="default" size="small" checked={rememberId} onChange={handleRememberId} />}
              label="아이디 저장"
            />
          </fieldset>
          <Button login type='submit'>로그인</Button>
          <QuickBox />
        </form>
      )}

      {type === 'history' && users === 'nonMember' && (
        <form onSubmit={handleGuestSubmit}>
          <fieldset >
            <Input placeholder='주문자명' margin='0 0 10px 0' name='userName' onChange={handleChangeGuest} />
            <Input placeholder='주문번호 하이픈(-)포함' margin='0 0 10px 0' name='orderNum' onChange={handleChangeGuest} />
            <Input placeholder='비회원 패스워드' margin='0 0 10px 0' type='password' name='orderPassword' onChange={handleChangeGuest} />
          </fieldset>

          <Button login type='submit'>조회</Button>

          <p style={{ fontSize: '12px', marginTop: '10px', color: '#757575' }}>비회원인 경우 주문번호로 주문조회만 가능합니다.</p>
        </form>
      )}

      {type === 'order' && <NonMemBox />}
    </S.Login>
  );
};

