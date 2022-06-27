import styled from '@emotion/styled';

import Box from './Box';

export const Loader = styled(Box)`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #ceff00;
  border-radius: 50%;
  width: 100%;
  height: 100%;
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
