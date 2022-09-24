import { Box } from 'components/Atoms';
import theme from 'styles/theme';

export default function Paragraph({ children }: { children: any }) {
  return (
    <Box
      fontSize="12px"
      lineHeight={1.5}
      color={theme.colors.gray77}
      marginBottom="30px"
    >
      {children}
    </Box>
  );
}
