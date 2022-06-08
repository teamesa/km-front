import styled from '@emotion/styled';

import Input from './Input';

const TextInput = styled(Input)`
  color: var(--black);
  width: 100%;
  height: 48px;
  padding: 8px 12px;
  border-bottom: solid 2px var(--grey-300);
  transition: 0.25s;
  font-size: 17px;

  :focus {
    border-bottom: solid 2px var(--primary-400);
    caret-color: var(--primary-400);
  }

  &:read-only {
    border-bottom: solid 2px var(--grey-300);
    caret-color: var(--primary-400);
  }

  &::placeholder {
    color: var(--grey-300);
    opacity: 1;
  }
`;

export default TextInput;
