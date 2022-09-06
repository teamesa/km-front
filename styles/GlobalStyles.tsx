import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  let isiOS = false;

  if (typeof window !== 'undefined') {
    if (/IPHONE/i.test(navigator.userAgent.toUpperCase())) {
      isiOS = true;
    }
  }

  return (
    <Global
      styles={css`
        body {
          font-family: -apple-system, SpoqaHanSansNeo, sans-serif !important;
        }
        div,
        input,
        textarea,
        button,
        select,
        a {
          font-family: -apple-system, SpoqaHanSansNeo, sans-serif !important;
        }
        @font-face {
          font-family: 'SpoqaHanSansNeo';
          font-weight: 700;
          src: url('../fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'SpoqaHanSansNeo';
          font-weight: 500;
          src: url('../fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
        }

        @font-face {
          font-family: 'SpoqaHanSansNeo';
          font-weight: 400;
          src: url('../fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'SpoqaHanSansNeo';
          font-weight: 300;
          src: url('../fonts/SpoqaHanSansNeo-Light.ttf') format('truetype');
        }

        @font-face {
          font-family: 'SpoqaHanSansNeo';
          font-weight: 100;
          src: url('../fonts/SpoqaHanSansNeo-Thin.ttf') format('truetype');
        }

        :root {
          --platformPadding: ${isiOS ? '24px' : '16px'};
          --platformBottomArea: ${isiOS ? '24px' : '0px'};
        }

        * {
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          user-select: none;
          -webkit-touch-callout: none;
        }
      `}
    />
  );
}
