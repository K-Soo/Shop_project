import React,{useState} from "react";
import styled from "styled-components";
import Register from "components/Auth/Register";
import RegisterProvider from 'context/RegisterProvider';

interface IRegisterContainer {
  className?: string;
}

const RegisterContainer: React.FC<IRegisterContainer> = () => {
  return <Register />;
};

export default RegisterContainer;
