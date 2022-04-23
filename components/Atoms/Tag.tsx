import styled from '@emotion/styled';
import { color, ColorProps, background, BackgroundProps } from 'styled-system';

import { Span } from 'components/Atoms';

interface TagProps {
  children?: React.ReactNode;
}

const Tag = styled(Span)<ColorProps | BackgroundProps | TagProps>`
  padding: 4px 12px;
  border-radius: 11px;
  font-weight: 500;
  font-size: 11px;
  margin-right: 5px;
  ${color}
  ${background}
`;

export default Tag;
