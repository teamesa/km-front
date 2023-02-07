import { Box } from 'components/Atoms';
import MonthlyFreeItemHeader from 'components/Organisms/Home/Module/MonthlyFreeItem/MonthlyFreeItemHeader';
import NowArchiveItemCard from 'components/Organisms/Home/Module/NowArchiveItem/NowArchiveItemCard';
import { MonthlyFreeItemProps } from 'components/Organisms/Home/ModuleTypes';

export default function NowArchiveItem({
  topTitle = '실시간 아카이브',
  bottomTitle = '',
  index,
}: MonthlyFreeItemProps) {
  return (
    <Box width="100%" paddingX="15px" marginTop="60px" marginBottom="60px">
      <MonthlyFreeItemHeader
        topTitle={topTitle ?? '실시간 아카이브'}
        bottomTitle={bottomTitle ?? ''}
      />
      <Box>
        <NowArchiveItemCard />
        <NowArchiveItemCard />
        <NowArchiveItemCard />
        <NowArchiveItemCard />
      </Box>
    </Box>
  );
}
