import Layout from "components/Layout";
import { GlobalStyle } from "styles/global-styles.ts";
import Theme from "styles/Theme";
import Head from "next/head";
import { createContext } from "react";
import Router from "next/router";
import useApp, { appDefaultValue } from 'hooks/app';
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";
import { QueryClient, QueryClientProvider } from 'react-query'
// import {ReactQueryDevtools} from 'react-query-devtools';
import { ReactQueryDevtools } from 'react-query/devtools'
export const AppContext = createContext(appDefaultValue);

export default function App(props: AppProps) {
  const queryClient = new QueryClient()
  const app = useApp(props);

  return (
    <>
      <Head>
        <title>앱인데</title>
      </Head>
      <GlobalStyle />
      <AppContext.Provider value={app}>
        <QueryClientProvider client={queryClient}>
          <Theme>
            <Layout>
              <props.Component {...props.pageProps} />
            </Layout>
          </Theme>
      <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </AppContext.Provider>
    </>
  );
}
