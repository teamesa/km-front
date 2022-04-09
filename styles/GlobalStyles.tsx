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
        :root {
          --platformPadding: ${isiOS ? '24px' : '16px'};
          --platformBottomArea: ${isiOS ? '24px' : '0px'};
        }
      `}
    />
  );
}
