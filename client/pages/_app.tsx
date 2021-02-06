import "../styles/globals.css";

import "tailwindcss/tailwind.css";

import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />;
  </Head>;
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
