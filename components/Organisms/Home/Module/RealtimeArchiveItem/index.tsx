import { Box } from 'components/Atoms';
import RealTimeArchiveItemCard from 'components/Organisms/Home/Module/RealTimeArchiveItem/RealTimeArchiveItemCard';
import RealTimeArchiveItemHeader from 'components/Organisms/Home/Module/RealTimeArchiveItem/RealTimeArchiveItemHeader';
import { RealTimeArchiveItemProps, RealTimeArchiveItemCardProps } from 'components/Organisms/Home/ModuleTypes';
import { useRecoilValue } from 'recoil';
import { homeModuleIndividualStateFamily } from 'states/home';

export default function RealTimeArchiveItem({
  realtimeArchiveTopTitle,
  realtimeArchiveBottomTitle,
  index,
}: RealTimeArchiveItemProps) {
  const archives = useRecoilValue(homeModuleIndividualStateFamily(index)) as unknown as RealTimeArchiveItemCardProps[];
  return (
    <Box width="100%" paddingX="15px" marginTop="60px" marginBottom="60px">
      <RealTimeArchiveItemHeader
        topTitle={realtimeArchiveTopTitle ?? '실시간 아카이브'}
        bottomTitle={realtimeArchiveBottomTitle ?? ''}
      />
      <Box marginTop="20px">
        {archives?.map((archive, mapIndex) => (
          <RealTimeArchiveItemCard
            key={mapIndex}
            archive={archive}
            moduleIndex={index}
          />
        ))}
      </Box>
    </Box>
  );
}
