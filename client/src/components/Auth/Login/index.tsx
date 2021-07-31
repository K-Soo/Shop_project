import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "components/style/Button";
import { useRouter } from "next/router";
import PAGE from "../../../../utils/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Input from "components/style/Input";

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
        <div className='title-box'>
          <h3>LOGIN</h3>
          <ul>
            <li>로그인</li>
            <li>비회원</li>
          </ul>
        </div>

        <form action='submit' className='form-box'>
          <fieldset className='form-box__login-info'>
            <Input placeholder='아이디' margin='0 0 10px 0' height='40' />
            <Input placeholder='비밀번호' height='40' />
          </fieldset>

          <fieldset className='form-box__security'>
            <span className='form-box__security--connection'>보안접속</span>
            <span className='form-box__security--save-id'>아이디 저장</span>
          </fieldset>

          <fieldset className='form-box__login'>
            <Button login>로그인</Button>
          </fieldset>
        </form>

        {/* <Button>네이버로 시작하기</Button>
        <Button>카카오로 시작하기</Button> */}
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
    .title-box {
      /* border: 1px solid red; */
      text-align: center;
    }
    .form-box {
      display: flex;
      flex-direction: column;
      &__login-info {
      }
      &__security {
        margin: 10px 0;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        &--save-id {
          margin-right: 5px;
        }
      }
    }
  }
`;
