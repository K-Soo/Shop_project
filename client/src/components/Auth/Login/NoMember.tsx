import React from "react";
import styled from "styled-components";
import Input from "components/style/Input";
import Button from "components/style/Button";

export default function NoMember ()  {
  return (
    <form action='submit' >
      <fieldset className='login-info'>
        <Input placeholder='주문자명' margin='0 0 10px 0' height='40' />
        <Input placeholder='아이디' margin='0 0 10px 0' height='40' />
        <Input placeholder='아이디' margin='0 0 10px 0' height='40' />
      </fieldset>

      <fieldset className='login'>
        <Button login>주문조회</Button>
      </fieldset>
    </form>
  );
};
