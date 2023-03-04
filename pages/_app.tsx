import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';

import { Box } from 'components/Atoms';
import { Loader } from 'components/Atoms/Loader';
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <AsyncBoundary
            suspenseFallback={
              <Box position="absolute" top="40%" left="46%">
                <Loader />
              </Box>
            }
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
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
