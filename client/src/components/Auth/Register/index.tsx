import React from "react";
import styled from "styled-components";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import PAGE from "../../../../utils/path";
import Button from "components/style/Button";
import Input from "components/style/Input";
import Title from "components/style/Title";
import Label from "components/style/Label";

interface IRegister {
  className?: string;
}

const Register: React.FC<IRegister> = ({ className }) => {
  return (
    <main className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.REGISTER].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
      <article className='container'>
        <Title>회원가입</Title>
        <form className='form-box'>
          <fieldset>
            <legend>기본정보</legend>
            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                아이디
              </Label>
              <Input
                width='250'
                placeholder='아이디'
                name=''
                required={true}
                id='loginId'
                value=''
                handleChange={() => {}}
              />
            </div>
            <div className='form-box__input-wrap'>
              <Label htmlFor='password' required>
                비밀번호
              </Label>
              <Input
                type='password'
                width='250'
                placeholder='비밀번호'
                name=''
                id='password'
                value=''
                handleChange={() => {}}
              />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                비밀번호 확인
              </Label>
              <Input
                type='password'
                width='250'
                placeholder='비밀번호'
                name=''
                value=''
                handleChange={() => {}}
              />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                이름
              </Label>
              <Input
                width='250'
                placeholder='이름'
                name=''
                value=''
                handleChange={() => {}}
              />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                휴대전화
              </Label>
              <Input
                width='250'
                placeholder='이름'
                name=''
                value=''
                handleChange={() => {}}
              />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                이메일
              </Label>
              <Input
                width='250'
                placeholder='이름'
                name=''
                value=''
                handleChange={() => {}}
              />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                주소
              </Label>
              <Input
                width='200'
                placeholder='주소'
                name=''
                value=''
                handleChange={() => {}}
              />
              <Input
                width='250'
                placeholder='주소'
                name=''
                value=''
                handleChange={() => {}}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>추가정보</legend>
            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                생년월일
              </Label>
              <Input
                width='250'
                placeholder='주소'
                name=''
                value=''
                handleChange={() => {}}
              />
            </div>

            <div className='form-box__input-wrap'>
              <Label htmlFor='loginId' required>
                지역
              </Label>
              <Input
                width='250'
                placeholder='주소'
                name=''
                value=''
                handleChange={() => {}}
              />
            </div>
          </fieldset>
        </form>
      </article>
    </main>
  );
};

export default styled(Register)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  .container {
    margin: 0 auto;
    .form-box {
      &__input-wrap {
        margin-bottom: 15px;
      }
      legend {
        font-size: 16px;
        border-bottom: 1px solid #e7e7e7;
        color: #2e2e2e;
        width: 100%;
        padding: 10px 0;
        margin-bottom: 20px;
      }
    }
  }
`;
