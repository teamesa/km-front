import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import Portal from 'components/Molecules/Portal';
import Container from 'components/Organisms/Common/Container';
import ModalContainer from 'components/Organisms/Modal/ModalContainer';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/index.css';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        <Suspense fallback="Loading...">
          <Container>
            <Component {...pageProps} />
          </Container>
          <Portal query="#modal">
            <ModalContainer />
          </Portal>
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
