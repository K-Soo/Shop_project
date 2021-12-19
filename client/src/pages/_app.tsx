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
import { Hydrate } from 'react-query/hydration'
import cookies from 'next-cookies'
import axios from 'axios';
import jwt from "jsonwebtoken";
import AppProvider, { useAppContext } from 'context/AppProvider';
import ReviewProvider from 'context/ReviewProvider';
import OrderProvider from 'context/OrderProvider';
import AdminProvider from 'context/AdminProvider';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { SnackbarProvider } from 'notistack';
import { NextPageContext } from "next";
import dynamic from 'next/dynamic'

// export const ComponentWithNoSSR = dynamic(() => import('./Component'), {
//   ssr: false,
// })
// import Slide from '@material-ui/core/Slide';
export default function App(props: AppProps) {
  function queryErrorHandler(error: unknown): void {
    alert('잠시후 다시 시도해주세요');
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: queryErrorHandler
      }
    }
  })
  // useApp(props.pageProps.userId);

  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  }

  return (
    <>
      <GlobalStyle />
      <SnackbarProvider 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
        autoHideDuration={1500
      }>
        <AppProvider AppProps={props}>
          <AdminProvider >
            <OrderProvider value={props}>
              <ReviewProvider value={props}>
                <QueryClientProvider client={queryClient}>
                  {/* <Hydrate state={props.pageProps.dehydratedState}> */}
                  <Theme>
                    <Layout >
                      <PayPalScriptProvider options={initialOptions} deferLoading={true}>
                        <props.Component {...props.pageProps} />
                      </PayPalScriptProvider>
                    </Layout>
                  </Theme>
                  {/* </Hydrate> */}
                  <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
              </ReviewProvider>
            </OrderProvider>
          </AdminProvider>
        </AppProvider>
      </SnackbarProvider>
    </>
  );
}

App.getInitialProps = async (context: NextAppContext) => {
  const { ctx, Component } = context;

  if (ctx.req) {
    console.log('서버사이드');
  } else {
    console.log('클라이언트 사이드');
  }

  const { access_token } = cookies(ctx);
  const strToken = access_token && access_token.split('Bearer ')[1];
  const decodedJwt = jwt.decode(strToken) as { [key: string]: string };

  const userId = decodedJwt ? decodedJwt.userId : '';
  const idx = decodedJwt ? decodedJwt.id : '';

  const userInfo = {
    userId,
    idx,
  };

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps = { ...pageProps, userInfo };


  //  if(access_token){
  //   ctx.res.writeHead(307, { Location: '/auth/register' })
  //   ctx.res.end()
  // }
  // axios.defaults.headers['ㅁㄴㅇㅁㄴㅇ'] = access_token;

  // if(access_token){
  //   ctx.res.writeHead(307, { Location: '/' })
  //   ctx.res.end()
  // }


  // console.log('scr', document?.cookie);

  //  console.log(Object.keys(ctx));
  // _app에서 props 추가 (모든 컴포넌트에서 공통적으로 사용할 값 추가)

  // const cookie = ctx.isServer ? ctx.req.headers.cookie : '';

  // if (ctx.isServer && cookie) { 
  //   Axios.defaults.headers.Cookie = cookie;
  // }

  return { userInfo };
};
