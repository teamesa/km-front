import styled from '@emotion/styled';

import { PopupProps } from 'components/Molecules/Popup';

export default styled.div<PopupProps>`
  display: flex;
  align-items: ${({ type }) => (type == 'bottom' ? 'flex-end' : 'center')};
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 2;
`;
