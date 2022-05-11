import { css } from '@emotion/react';

import { data as Tdata } from './data';

import { Box, Tag } from 'components/Atoms';
import DescriptionInfo from 'components/Molecules/DescriptionInfo';
import TopTabView from 'components/Molecules/TopTabView';
import BottomSheetHeader from 'components/Organisms/Detail/Description/BottomSheetHeader';
import theme from 'styles/theme';

export default function Description() {
  return (
    <Box>
      <BottomSheetHeader />
      <Box backgroundColor={theme.colors.white} padding="0 15px 60px">
        <Tag border="1px solid #000">전시회</Tag>
        <Box marginTop="19px">요시코 사진전:따뜻한 휴일의 기록</Box>
        <Box marginTop="30px" marginBottom="40px">
          <DescriptionInfo
            title="기간"
            description={['2021.06.23~2022.01.13']}
          />
          <DescriptionInfo title="장소" description={['그라운드 시소(서촌)']} />
          <DescriptionInfo
            title="입장료"
            description={['유료 (성인 15,000원 / 청소년 10,000원)']}
          />
          <DescriptionInfo
            title="시간"
            description={['화 (14:00~16:00)', '화 (14:00~16:00)']}
          />
        </Box>
      </Box>
      <TopTabView
        data={Tdata.map((item) => ({
          title: item.title,
          contents: item.contents,
        }))}
      />
    </Box>
  );
}
