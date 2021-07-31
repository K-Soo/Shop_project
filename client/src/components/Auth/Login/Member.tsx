import React from "react";
import styled from "styled-components";
import Input from "components/style/Input";
import Button from "components/style/Button";

interface Imember {
  className?: string;
}

const member: React.FC<Imember> = ({ className }) => {
  return (
    <form action='submit' className={className}>
      <fieldset className='login-info'>
        <Input placeholder='아이디' margin='0 0 10px 0' height='40' />
        <Input placeholder='비밀번호' height='40' />
      </fieldset>

      <fieldset className='security'>
        <span className='security--connection'>보안접속</span>
        <span className='security--save-id'>아이디 저장</span>
      </fieldset>

      <fieldset className='login'>
        <Button login>로그인</Button>
      </fieldset>
    </form>
  );
};

export default styled(member)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .login-info {
  }
  .security {
    margin: 10px 0;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    &--save-id {
      margin-right: 5px;
    }
  }
`;
