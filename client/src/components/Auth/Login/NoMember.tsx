import React from "react";
import styled from "styled-components";
import Input from "components/style/Input";
import Button from "components/style/Button";
interface INoMember {
  className?: string;
}

const NoMember: React.FC<INoMember> = ({ className }) => {
  return (
    <form action='submit' className={className}>
      <fieldset className='login-info'>
        <Input placeholder='아이디' margin='0 0 10px 0' height='40' />
        <Input placeholder='아이디' margin='0 0 10px 0' height='40' />
        <Input placeholder='아이디' margin='0 0 10px 0' height='40' />
      </fieldset>

      <fieldset className='login'>
        <Button login>로그인</Button>
      </fieldset>
    </form>
  );
};

export default styled(NoMember)``;
