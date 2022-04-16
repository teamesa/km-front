import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Container from 'components/Organisms/common/Container';
import GlobalStyles from 'styles/GlobalStyles';

import 'styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Container>
        <Component {...pageProps} />
      </Container>
    </RecoilRoot>
  );
}

export default MyApp;
