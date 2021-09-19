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
import OrderProvider from 'context/OrderProvider';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function App(props: AppProps) {
  const { state, action } = useAppContext();
  const queryClient = new QueryClient()
  // useApp(props.pageProps.userId);

  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  }

  return (
    <>
      <GlobalStyle />
      <AppProvider AppProps={props}>
        <OrderProvider value={props}>
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
        </OrderProvider>
      </AppProvider>
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
  const decodedJwt = access_token && jwt.decode(access_token) as any;
  console.log('decodedJwt: ', decodedJwt);

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const userId = decodedJwt ? decodedJwt.userId : '';
  const idx = decodedJwt ? decodedJwt.id : '';

  const userInfo = {
    userId,
    idx,
  };

  pageProps = { ...pageProps, userInfo };

  console.log('userId: ', userId);
  // const cookie = ctx.req ? ctx.req.headers.cookie : '';

  // axios.defaults.headers.Cookie = access_token;
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
