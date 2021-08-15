import { createContext,useContext } from "react";
import useRegister, { appDefaultValue } from 'hooks/useRegister';
import { AppProps } from "next/app";

interface IApp {
  children: React.ReactNode;
  AppProps?: AppProps;
}

export const AppContext = createContext(appDefaultValue);
export const useRegisterContext = () =>  useContext(AppContext);

export default function RegisterProvider(props: IApp) {
  const app = useRegister(props.AppProps);

  return (
    <AppContext.Provider value={app}>
      {props.children}
    </AppContext.Provider>
  );
}

