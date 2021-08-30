import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Button from "components/style/Button";
import { useRouter } from "next/router";
import PAGE from "constants/path";
import Title from "components/style/Title";
import Member from "components/Auth/Login/Member";
import NoMember from "components/Auth/Login/NoMember";
import { Post } from 'api';

const S = {
  Login: styled.section`
    max-width: 400px;
    margin: 0 auto;
  `,
  LoginMenu: styled.ul<{ toggle: string }>`
    display: flex;
    text-align: center;
    align-items: center;
    height: 50px;
    font-size: 13px;
    font-weight: bold;
    color: #222;
    .item {
      cursor: pointer;
      flex: 1;
      height: 100%;
      line-height: 50px;
    }
    .member {
      border-bottom: 2px solid #222;
      ${({ toggle }) => toggle === "noMember" &&
      css`
        border-bottom: 2px solid #dfdfdf;
      `}
    }
    .no-member {
      border-bottom: 2px solid #dfdfdf;
      ${({ toggle }) => toggle === "noMember" &&
      css`
        border-bottom: 2px solid #222;
      `}
    }
  `,
  QuestionBox: styled.p`
    margin: 10px 0;
    text-align: center;
    font-size: 11px;
    .question{
      color: #bcbcbc;
      margin-right: 5px;
    }
    .question{
      text-decoration: underline;
    }
  `,
}

type TLogin = "member" | "noMember";

export default function Login() {
  const [toggle, setToggle] = useState<TLogin>("member");
  const router = useRouter();


  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      (async () => {
        const res = await Post.login({ userId: "llssll", password: 'llssll' });
        console.log('res: ', res);

      })();
    } catch (error) {
      console.log('login: ', error.response);
    }
  };
  console.log('document.cookie',document.cookie);


  return (
    <S.Login >
      <div className='container'>
        <Title level={1} marginB='30'>LOGIN</Title>
        <S.LoginMenu toggle={toggle}>
          <li className='member item' onClick={() => setToggle("member")}>
            회원 로그인
          </li>
          <li className='no-member item' onClick={() => setToggle("noMember")}>
            비회원 로그인
          </li>
        </S.LoginMenu>
        {toggle === "member" ? <Member handleSubmit={handleSubmit} /> : <NoMember />}
        {toggle === "member" && (
          <>
            <Button kakao>카카오로 시작하기</Button>
            <S.QuestionBox >
              <span className='question'>
                아직도 회원이 아니신가요?
              </span>
              <Link href={PAGE.REGISTER.path}>
                <a className='link'>{PAGE.REGISTER.tag}</a>
              </Link>
            </S.QuestionBox>
          </>
        )}
      </div>
    </S.Login>
  );
};

