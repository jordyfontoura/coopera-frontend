import '@/styles/globals.scss';
import {Header} from '@/components/layout/header/header.component';
import type {AppProps} from 'next/app';

/**
 * Next.js uses the App component to initialize pages.
 * @return {JSX.Element} The App component.
 */
export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}
