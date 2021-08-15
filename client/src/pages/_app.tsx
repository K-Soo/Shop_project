import Layout from "components/Layout";
import { GlobalStyle } from "styles/global-styles.ts";
import Theme from "styles/Theme";
import Head from "next/head";
import { createContext } from "react";
import Router from "next/router";
import useApp, { appDefaultValue } from 'hooks/useApp';
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";
import { QueryClient, QueryClientProvider } from 'react-query'
// import {ReactQueryDevtools} from 'react-query-devtools';
import { ReactQueryDevtools } from 'react-query/devtools'
import AppProvider from 'context/AppProvider';

export default function App(props: AppProps) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>앱인데</title>
      </Head>
      <GlobalStyle />
      <AppProvider AppProps={props}>
        <QueryClientProvider client={queryClient}>
          <Theme>
            <Layout>
              <props.Component {...props.pageProps} />
            </Layout>
          </Theme>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppProvider>
    </>
  );
}
