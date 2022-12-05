import { useRecoilValue } from 'recoil';

import { Box } from 'components/Atoms';
import MonthlyFreeItemCard from 'components/Organisms/Home/Module/MonthlyFreeItem/MonthlyFreeItemCard';
import MonthlyFreeItemHeader from 'components/Organisms/Home/Module/MonthlyFreeItem/MonthlyFreeItemHeader';
import NowArchiveItemCard from 'components/Organisms/Home/Module/NowArchiveItem/NowArchiveItemCard';
import { MonthlyFreeItemProps } from 'components/Organisms/Home/ModuleTypes';
import { homeModuleIndivisualStateFamily } from 'states/home';

export default function NowArchiveItem({
  topTitle = '실시간 아카이브',
  bottomTitle = '',
  index,
}: MonthlyFreeItemProps) {
  // const contents = [
  //   {
  //     id: 1,
  //     content: {
  //       id: 11,
  //       title: {text: '2021 서울재즈페스티벌', link:''}
  //     },
  //     moduleIndex: 4,
  //   },
  // ];

  return (
    <Box width="100%" paddingX="15px" marginTop="60px" marginBottom="60px">
      <MonthlyFreeItemHeader
        topTitle={topTitle ?? '실시간 아카이브'}
        bottomTitle={bottomTitle ?? ''}
      />
      <Box marginTop="20px">
        {/* {contents?.map((content) => (
          <NowArchiveItemCard
            key={content.id}
            content={content}
            moduleIndex={index}
          />
        ))} */}
        <NowArchiveItemCard />
      </Box>
    </Box>
  );
}
