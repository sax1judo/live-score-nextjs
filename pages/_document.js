// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import GlobalStylesWrapper from "../components/GlobalStylesWrapper/GlobalStylesWrapper";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Live Betting App</title>
          <link rel="stylesheet" type="text/css" href="/fonts/fonts.css" />
          <GlobalStylesWrapper />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
