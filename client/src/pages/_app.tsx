import Layout from "components/Layout";
import { GlobalStyle } from "styles/global-styles.ts";
import Theme from "styles/Theme";
import Head from "next/head";
import { createContext } from "react";
import Router from "next/router";
import useApp, { appDefaultValue } from 'hooks/useApp';
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AppProvider from 'context/AppProvider';
import { Hydrate } from 'react-query/hydration'

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
        <Hydrate state={props.pageProps.dehydratedState}>
          <Theme>
            <Layout>
              <props.Component {...props.pageProps} />
            </Layout>
          </Theme>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppProvider>
    </>
  );
}

// App.getInitialProps = async ({ Component, ctx }): Promise<{ pageProps: {} }> => {
//   let pageProps = {};
//   // 하위 컴포넌트에 getInitialProps가 있다면 추가 (각 개별 컴포넌트에서 사용할 값 추가)
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   // _app에서 props 추가 (모든 컴포넌트에서 공통적으로 사용할 값 추가)
//   pageProps = { ...pageProps, posttt: { title: 11111, content: 3333 } };
//   return { pageProps };
// };
