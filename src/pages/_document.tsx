import { MetaInfo } from '@/containers/MetaInfo';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us">
        <Head>
          <MetaInfo />
        </Head>
        <body>
          <Main />
          <NextScript />
          <SpeedInsights />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
