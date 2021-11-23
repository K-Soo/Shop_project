import React,{useState} from "react";
import Register from "components/Auth/Register";

interface IRegisterContainer {
  className?: string;
}

const RegisterContainer: React.FC<IRegisterContainer> = () => {
  return <Register />;
};

export default RegisterContainer;
