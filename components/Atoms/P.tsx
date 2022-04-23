import styled from '@emotion/styled';
import {
  color,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  ColorProps,
  ShadowProps,
  shadow,
  border,
  BorderProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  BackgroundProps,
  background,
} from 'styled-system';

const P = styled.p<
  | SpaceProps
  | LayoutProps
  | ColorProps
  | ShadowProps
  | BorderProps
  | TypographyProps
  | FlexboxProps
  | BackgroundProps
>`
  ${space}
  ${layout}
  ${color}
  ${shadow}
  ${border}
  ${typography}
  ${flexbox}
  ${background}
`;

export default P;
