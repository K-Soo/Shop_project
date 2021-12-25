import Layout from "components/Layout";
import { GlobalStyle } from "styles/global-styles.ts";
import Theme from "styles/Theme";
import NextApp, { AppProps, AppContext as NextAppContext } from "next/app";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import cookies from 'next-cookies'
import jwt from "jsonwebtoken";
import AppProvider from 'context/AppProvider';
import ReviewProvider from 'context/ReviewProvider';
import OrderProvider from 'context/OrderProvider';
import AdminProvider from 'context/AdminProvider';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SnackbarProvider } from 'notistack';

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
                  <Theme>
                    <Layout >
                      <PayPalScriptProvider options={initialOptions} deferLoading={true}>
                        <props.Component {...props.pageProps} />
                      </PayPalScriptProvider>
                    </Layout>
                  </Theme>
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


  return { userInfo };
};
