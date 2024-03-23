import type {AppProps} from 'next/app';

/**
 * Next.js uses the App component to initialize pages.
 * @return {JSX.Element} The App component.
 */
export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
