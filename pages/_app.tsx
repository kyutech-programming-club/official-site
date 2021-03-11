import React from 'react';
import '../styles/globals.scss';

function MyApp(
  { Component }: { Component: any },
  { pageProps }: { pageProps: any }
) {
  return <Component {...pageProps} />;
}

export default MyApp;
