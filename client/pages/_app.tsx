import type { AppProps } from 'next/app'
import Layout from 'components/Layout';
import { GlobalStyle } from 'styles/global-styles.ts';
import Theme from 'styles/Theme';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  )
}
export default App
