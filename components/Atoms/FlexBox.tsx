import styled from '@emotion/styled';
import { flexbox, FlexboxProps } from 'styled-system';

import Box from './Box';

const FlexBox = styled(Box)<FlexboxProps>`
  ${flexbox}
  display: flex;
`;

export default FlexBox;
