import React from "react";
import styled from "styled-components";
import PageTitle from 'components/Common/PageTitle';
import Input from "components/style/Input";
import Button from "components/style/Button";

interface IFindId {

}

const S = {
  FindId: styled.section`
      max-width: 350px;
    border: 1px solid red;
    margin: 0 auto;
    .security{
      margin: 10px 0;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }
  `,
}

export default function FindId({ }: IFindId) {

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {

    } catch (error) {
      console.error('login: ', error);
    }
  };
  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    // setLogin({
    //   ...login,
    //   [name]: value,
    // });
  };

  return (
    <S.FindId>
      <PageTitle TitleText='아이디 찾기' />

      <form onSubmit={handleSubmit}>
        <fieldset >
          <Input placeholder='아이디' margin='0 0 10px 0' name='userId' onChange={handleChangeLogin} />
          <Input placeholder='비밀번호' type='password' name='password' onChange={handleChangeLogin} />
        </fieldset>

        <fieldset className='security'>
          <span >보안접속</span>
          <span >아이디 저장</span>
        </fieldset>
        <Button login type='submit'>아이디 찾기</Button>
      </form>
    </S.FindId>
  );
}
