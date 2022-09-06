import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function SwipeItemKeyword({ keyword }: { keyword: string }) {
  return (
    <Box
      padding="6px 10px"
      color={theme.colors.gray33}
      lineHeight={1.45}
      fontSize="11px"
      border="solid 1px #ddd"
      marginRight="5px"
    >
      {keyword}
    </Box>
  );
}
