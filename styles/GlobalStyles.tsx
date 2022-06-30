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
          font-family: -apple-system, SpoqaHanSansNeo, sans-serif;
        }
        @font-face {
          font-family: 'SpoqaHanSansNeo';
          src: url('/fonts/SpoqaHanSansNeo-Light.ttf') format('ttf'),
            url('/fonts/SpoqaHanSansNeo-Medium.ttf') format('ttf'),
            url('/fonts/SpoqaHanSansNeo-Bold.ttf') format('ttf'),
            url('/fonts/SpoqaHanSansNeo-Regular.ttf') format('ttf'),
            url('/fonts/SpoqaHanSansNeo-Thin.ttf') format('ttf');
        }

        :root {
          --platformPadding: ${isiOS ? '24px' : '16px'};
          --platformBottomArea: ${isiOS ? '24px' : '0px'};
        }
      `}
    />
  );
}
