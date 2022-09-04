import { Box } from 'components/Atoms';

export default function MonthlyFreeItemHeader({
  topTitle,
  bottomTitle,
}: {
  topTitle: string;
  bottomTitle: string;
}) {
  return (
    <Box textAlign="left" fontSize="22px" fontWeight={500} lineHeight={1.27}>
      <Box>{topTitle}</Box>
      <Box>{bottomTitle}</Box>
    </Box>
  );
}
