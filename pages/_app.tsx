import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import LoadingScreen from 'components/Molecules/LoadingScreen';
import Portal from 'components/Molecules/Portal';
import Container from 'components/Organisms/Common/Container';
import AsyncBoundary from 'components/Organisms/Error/AsyncBoundary';
import ErrorFallback from 'components/Organisms/Error/ErrorFallback';
import ModalContainer from 'components/Organisms/Modal/ModalContainer';
import PopupRouter from 'components/Organisms/Popup/PopupRouter';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/index.css';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        <AsyncBoundary
          suspenseFallback={<>loading</>}
          errorFallback={<ErrorFallback />}
        >
          <Script
            strategy="lazyOnload"
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services,clusterer`}
          />
          <Container>
            <Component {...pageProps} />
          </Container>

          <Portal query="#modal">
            <ModalContainer />
          </Portal>
          <LoadingScreen />
          <PopupRouter />
        </AsyncBoundary>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
