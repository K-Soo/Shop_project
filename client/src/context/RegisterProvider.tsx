import { createContext,useContext } from "react";
import useRegister, { registerDefaultValue } from 'hooks/useRegister';
import { AppProps } from "next/app";

interface IApp {
  children: React.ReactNode;
  value: any;
}

export const RegisterContext = createContext(registerDefaultValue);
export const useRegisterContext = () =>  useContext(RegisterContext);

export default function RegisterProvider(props: IApp) {
  const providerValue = useRegister(props.value);

  return (
    <RegisterContext.Provider value={providerValue}>
      {props.children}
    </RegisterContext.Provider>
  );
}

