import { Box } from 'components/Atoms';
import MonthlyFreeItemHeader from 'components/Organisms/Home/Module/MonthlyFreeItem/MonthlyFreeItemHeader';
import RealtimeArchiveItemCard from 'components/Organisms/Home/Module/RealtimeArchiveItem/RealtimeArchiveItemCard';
import { MonthlyFreeItemProps } from 'components/Organisms/Home/ModuleTypes';

export default function RealTimeArchiveItem({
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
        <RealtimeArchiveItemCard />
        <RealtimeArchiveItemCard />
        <RealtimeArchiveItemCard />
        <RealtimeArchiveItemCard />
      </Box>
    </Box>
  );
}
