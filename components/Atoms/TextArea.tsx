import styled from '@emotion/styled';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

const TextArea = styled.textarea<
  | SpaceProps
  | LayoutProps
  | ColorProps
  | ShadowProps
  | BorderProps
  | TypographyProps
  | FlexboxProps
>`
  ${space}
  ${layout}
  ${color}
  ${shadow}
  ${border}
  ${typography}
  ${flexbox}

  width: 100%;
  &::placeholder {
    color: #bbbbbb;
    opacity: 1;
  }
`;

export default TextArea;
