import React from "react";
import styled from "styled-components";
import Button from "components/style/Button";
import { useRouter } from "next/router";
import PAGE from "../../../../utils/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

interface ILogin {
  className?: string;
}

const Login: React.FC<ILogin> = ({ className }) => {
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
      <div className='container'>
        <div className='container__title-box'>
          <h3>LOGIN</h3>
          <ul>
            <li>로그인</li>
            <li>비회원</li>
          </ul>
        </div>

        <form action='submit' className='form-box'>
          <input type='text' placeholder='로그인' />
          <input type='text' placeholder='회원가입' />
          <Button login>로그인</Button>
        </form>

        <Button>네이버로 시작하기</Button>
        <Button>카카오로 시작하기</Button>
        <Button
          onClick={() => {
            router.push(PAGE.REGISTER.path);
          }}
        >
          {PAGE.REGISTER.tag}
        </Button>
      </div>
    </main>
  );
};

export default styled(Login)`
  margin: 0 auto;
  .container {
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid red;
    &__title-box {
      border: 1px solid red;
      text-align: center;
    }
    .form-box {
      display: flex;
      flex-direction: column;
      border: 1px solid red;
    }
  }
`;
