import {Html, Head, Main, NextScript} from 'next/document';

/**
 * Next.js uses the Document component \
 * to augment your application's <html> and <body> tags.
 * @return {JSX.Element} The Document component.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
