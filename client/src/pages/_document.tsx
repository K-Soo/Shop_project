/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head >
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta name="keywords" content="포트폴리오,쥬얼리샵,금,목걸이,귀걸이,반지,팔찌,발찌,순금,다이아몬드,커플링" />
          <meta name="author" content="kosoo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument