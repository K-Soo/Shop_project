import React from "react";
import styled from "styled-components";
import Login from "components/Auth/Login";

interface ILoginContainer {
  className?: string;
}

const LoginContainer: React.FC<ILoginContainer> = () => {
  return <Login />;
};

export default LoginContainer;
