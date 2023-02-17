import { Box } from 'components/Atoms';
import RealTimeArchiveItemCard from 'components/Organisms/Home/Module/RealtimeArchiveItem/RealtimeArchiveItemCard';
import RealTimeArchiveItemHeader from 'components/Organisms/Home/Module/RealtimeArchiveItem/RealtimeArchiveItemHeader';
import { RealTimeArchiveItemProps } from 'components/Organisms/Home/ModuleTypes';

export default function RealTimeArchiveItem({
  realtimeArchiveTopTitle,
  realtimeArchiveBottomTitle,
  archives,
}: RealTimeArchiveItemProps) {
  return (
    <Box width="100%" paddingX="15px" marginTop="60px" marginBottom="60px">
      <RealTimeArchiveItemHeader
        topTitle={realtimeArchiveTopTitle ?? '실시간 아카이브'}
        bottomTitle={realtimeArchiveBottomTitle ?? ''}
      />
      <Box marginTop="20px">
        {archives?.map((archive, index) => (
          <RealTimeArchiveItemCard
            key={archive.archiveId ?? index}
            archive={archive}
          />
        ))}
      </Box>
    </Box>
  );
}
