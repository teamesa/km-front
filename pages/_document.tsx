/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="modal" role="dialog" aria-label="모달" />
      </body>
    </Html>
  );
}
