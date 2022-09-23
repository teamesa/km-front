import { Box } from 'components/Atoms';
import MonthlyFreeItemCard from 'components/Organisms/Home/Module/MonthlyFreeItem/MonthlyFreeItemCard';
import MonthlyFreeItemHeader from 'components/Organisms/Home/Module/MonthlyFreeItem/MonthlyFreeItemHeader';
import { MonthlyFreeItemProps } from 'components/Organisms/Home/ModuleTypes';

export default function MonthlyFreeItem({
  topTitle,
  bottomTitle,
  contents,
}: MonthlyFreeItemProps) {
  return (
    <Box width="100%" paddingX="15px" marginTop="60px" marginBottom="20px">
      <MonthlyFreeItemHeader
        topTitle={topTitle ?? '이달의'}
        bottomTitle={bottomTitle ?? 'FREE TICKET'}
      />
      <Box marginTop="20px">
        {contents.map((content) => (
          <MonthlyFreeItemCard key={content.id} content={content} />
        ))}
      </Box>
    </Box>
  );
}
