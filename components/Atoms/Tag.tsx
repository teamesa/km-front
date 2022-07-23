import styled from '@emotion/styled';
import {
  color,
  background,
  BackgroundProps,
  ColorProps,
  border,
  BorderProps,
} from 'styled-system';

import { Span } from 'components/Atoms';

interface TagProps {
  children?: JSX.Element;
}

const Tag = styled(Span)<BackgroundProps | ColorProps | BorderProps | TagProps>`
  display: inline-block;
  padding: 0px 12px;
  border-radius: 11px;
  font-weight: 500;
  font-size: 11px;
  line-height: 20px;
  margin-right: 5px;
  ${color}
  ${background}
  ${border}
`;

export default Tag;
