import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import Container from 'components/Organisms/Common/Container';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/index.css';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        <Suspense fallback={'Loading...'}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
