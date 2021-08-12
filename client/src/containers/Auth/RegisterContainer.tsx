import React,{useState} from "react";
import styled from "styled-components";
import Register from "components/Auth/Register";

interface IRegisterContainer {
  className?: string;
}

const RegisterContainer: React.FC<IRegisterContainer> = () => {
  const [isModal, setModal] = useState(false);
  console.log('isModal: ', isModal);
  return <Register isModal={isModal} onClick={() => setModal(!isModal)}/>;
};

export default RegisterContainer;
