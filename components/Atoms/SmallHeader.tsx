import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function SmallHeader({
  children,
}: {
  children: JSX.Element | string;
}) {
  return (
    <Box
      fontSize="14px"
      lineHeight={1.57}
      color={theme.colors.gray33}
      marginBottom="15px"
    >
      {children}
    </Box>
  );
}
