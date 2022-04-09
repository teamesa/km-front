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
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
} from 'styled-system';

const Box = styled.div<
  | SpaceProps
  | LayoutProps
  | ColorProps
  | ShadowProps
  | BorderProps
  | TypographyProps
  | PositionProps
  | FlexboxProps
  | BackgroundProps
>`
  ${space}
  ${layout}
  ${color}
  ${shadow}
  ${border}
  ${typography}
  ${position}
  ${flexbox}
  ${background}
`;

export default Box;
