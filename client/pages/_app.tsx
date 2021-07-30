import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { GlobalStyle } from "styles/global-styles.ts";
import Theme from "styles/Theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ㅁㅁㅁㅁ</title>
      </Head>
      <GlobalStyle />
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
