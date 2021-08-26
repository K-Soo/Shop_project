import { createContext,useContext } from "react";
import useRegister, { registerDefaultValue } from 'hooks/useRegister';
import { AppProps } from "next/app";

interface IApp {
  children: React.ReactNode;
  AppProps?: AppProps;
}

export const RegisterContext = createContext(registerDefaultValue);
export const useRegisterContext = () =>  useContext(RegisterContext);

export default function RegisterProvider(props: IApp) {
  const app = useRegister(props.AppProps);

  return (
    <RegisterContext.Provider value={app}>
      {props.children}
    </RegisterContext.Provider>
  );
}

