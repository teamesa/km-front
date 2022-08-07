import styled from '@emotion/styled';

import Box from './Box';

import Loading from 'assets/common/Loading';

export const Loader = () => (
  <SpinnedBox height="60px" width="60px">
    <Loading></Loading>
  </SpinnedBox>
);
const SpinnedBox = styled(Box)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
