import { useHomeQuery } from 'api/v1/queryHooks/home';
import { Box } from 'components/Atoms';
import RealTimeArchiveItemCard from 'components/Organisms/Home/Module/RealtimeArchiveItem/RealtimeArchiveItemCard';
import RealTimeArchiveItemHeader from 'components/Organisms/Home/Module/RealtimeArchiveItem/RealtimeArchiveItemHeader';
import {
  RealTimeArchiveItemProps,
  RealTimeArchiveItemCardProps,
} from 'components/Organisms/Home/ModuleTypes';

export default function RealTimeArchiveItem({
  realtimeArchiveTopTitle,
  realtimeArchiveBottomTitle,
  index,
}: RealTimeArchiveItemProps) {
  const { useGetHomeIndex } = useHomeQuery();
  const getHome = useGetHomeIndex(index);
  const archives = getHome as unknown as RealTimeArchiveItemCardProps[];

  return (
    <Box width="100%" paddingX="15px" marginTop="60px" marginBottom="60px">
      <RealTimeArchiveItemHeader
        topTitle={realtimeArchiveTopTitle ?? '실시간 아카이브'}
        bottomTitle={realtimeArchiveBottomTitle ?? ''}
      />
      <Box marginTop="20px">
        {archives?.map((archive, mapIndex) => (
          <RealTimeArchiveItemCard key={mapIndex} archive={archive} />
        ))}
      </Box>
    </Box>
  );
}
