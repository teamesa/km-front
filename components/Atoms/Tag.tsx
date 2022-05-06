import styled from '@emotion/styled';

import { Span } from 'components/Atoms';
import theme from 'styles/theme';

const tagType = {
  default: {
    color: `${theme.colors.gray}`,
    background: `${theme.colors.white}`,
  },
  bord: {
    color: `${theme.colors.black}`,
    background: `${theme.colors.white}`,
  },
  primary: {
    color: `${theme.colors.lime}`,
    background: `${theme.colors.black}`,
  },
  secondary: {
    color: `${theme.colors.black}`,
    background: `${theme.colors.lightGray}`,
  },
};

interface TagProps {
  children?: React.ReactNode;
  type?: keyof typeof tagType;
}

const Tag = styled(Span)<TagProps>`
  padding: 4px 12px;
  border-radius: 11px;
  font-weight: 500;
  font-size: 11px;
  margin-right: 5px;
  background: ${(props) => tagType[props.type || 'default'].background};
  color: ${(props) => tagType[props.type || 'default'].color};
`;

export default Tag;
