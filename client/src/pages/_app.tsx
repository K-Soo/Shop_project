import Layout from "components/Layout";
import { GlobalStyle } from "styles/global-styles.ts";
import Theme from "styles/Theme";
import Head from "next/head";
import { createContext } from "react";
import Router from "next/router";
import useApp, {appDefaultValue} from 'hooks/app';
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";

export const AppContext = createContext(appDefaultValue);

export default function App(props: AppProps) {
  
  const app = useApp(props);

  return (
    <>
      <Head>
        <title>앱인데</title>
      </Head>
      <GlobalStyle />
      <AppContext.Provider value={app}>
        <Theme>
          <Layout>
            <props.Component {...props.pageProps} />
          </Layout>
        </Theme>
      </AppContext.Provider>
    </>
  );
}
