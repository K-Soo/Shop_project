import { createContext,useContext } from "react";
import styled from "styled-components";
import useApp, { appDefaultValue } from 'hooks/app';
import { AppProps } from "next/app";

interface IApp {
  children: React.ReactNode;
  AppProps: AppProps;
}

export const AppContext = createContext(appDefaultValue);
export const useAppContext = () =>  useContext(AppContext);

export default function AppProvider(props: IApp) {
  const app = useApp(props.AppProps);

  return (
    <AppContext.Provider value={app}>
      {props.children}
    </AppContext.Provider>
  );
}

