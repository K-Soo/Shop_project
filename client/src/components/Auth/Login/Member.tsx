import React from "react";
import styled from "styled-components";
import Input from "components/style/Input";
import Button from "components/style/Button";

const S = {
  Member: styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    .security{
      margin: 10px 0;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      &__save-id{
        margin-right: 5px;
      }
    }
  `,
}

export default function Member() {
  return (
    <S.Member action='submit' >
      <fieldset >
        <Input placeholder='아이디' margin='0 0 10px 0' />
        <Input placeholder='비밀번호' />
      </fieldset>

      <fieldset  className='security'>
        <span >보안접속</span>
        <span className='security__save-id'>아이디 저장</span>
      </fieldset>

      <fieldset className='login'>
        <Button login>로그인</Button>
      </fieldset>
    </S.Member>
  );
};

