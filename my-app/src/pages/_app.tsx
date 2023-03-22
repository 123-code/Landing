import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import download from '../public/download.png'
function MyApp({ Component, pageProps }:AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;