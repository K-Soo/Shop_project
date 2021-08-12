import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Button from "components/style/Button";
import { useRouter } from "next/router";
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Title from "components/style/Title";
import Member from "components/Auth/Login/Member";
import NoMember from "components/Auth/Login/NoMember";

interface ILogin {
  className?: string;
}

const LoginMenu = styled.ul<{ toggle: string }>`
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
    ${props =>
      props.toggle === "noMember" &&
      css`
        border-bottom: 2px solid #dfdfdf;
      `}
  }
  .no-member {
    border-bottom: 2px solid #dfdfdf;
    ${props =>
      props.toggle === "noMember" &&
      css`
        border-bottom: 2px solid #222;
      `}
  }
`;

type TLogin = "member" | "noMember";

const Login: React.FC<ILogin> = ({ className }) => {
  const [toggle, setToggle] = useState<TLogin>("member");
  const router = useRouter();
  return (
    <main className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.LOGIN].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
      <article className='container'>
        <Title level={1} marginB='30'>LOGIN</Title>
        <LoginMenu toggle={toggle}>
          <li className='member item' onClick={() => setToggle("member")}>
            회원 로그인
          </li>
          <li className='no-member item' onClick={() => setToggle("noMember")}>
            비회원 로그인
          </li>
        </LoginMenu>
        {toggle === "member" ? <Member /> : <NoMember />}
        {toggle === "member" && (
          <>
            <Button kakao>카카오로 시작하기</Button>
            <div className='join-box'>
              <span className='join-box__question'>
                아직도 회원이 아니신가요?
              </span>
              <Link href={PAGE.REGISTER.path}>
                <a className='join-box__link'>{PAGE.REGISTER.tag}</a>
              </Link>
            </div>
          </>
        )}
      </article>
    </main>
  );
};

export default styled(Login)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  .container {
    max-width: 400px;
    margin: 0 auto;
    .join-box {
      margin: 10px 0;
      text-align: center;
      font-size: 11px;
      &__question {
        color: #bcbcbc;
        margin-right: 5px;
      }
      &__link {
        text-decoration: underline;
      }
    }
  }
`;
