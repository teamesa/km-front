import { css } from '@emotion/react';
import styled from '@emotion/styled/types/base';
import { Profile } from 'assets/mypage';
import { Box, FlexBox } from 'components/Atoms';
import type { ListPageContents } from 'states/list';
import ItemAdditionalInfo from './ItemAdditionalInfo';
import ItemImage from './ItemImage';
import ItemInfo from './ItemInfo';

type ItemProps = {
  content: ListPageContents;
};

export default function Item(props: ItemProps) {
  const content = props.content;
  return (
    <FlexBox
      margin="20px 0"
      padding="0 15px"
      onClick={() => {
        alert('클릭됐어요');
      }}
    >
      <Box flex={0.3} width="75px" height="75px">
        <ItemImage presentationImage={content.presentationImage} />
      </Box>
      <Box marginLeft="20px" flex={1}>
        <ItemInfo
          typeBadge={content.typeBadge}
          presentationTitle={content.title}
        />
        <Box
          fontSize="13px"
          marginTop="10px"
          lineHeight="20px"
          fontWeight={500}
        >
          {content.title.text}
        </Box>
        <Box marginTop="6px" fontSize="12px" lineHeight="18px">
          친구들과 함께 다녀왔던 황도유 작가님 전시회! 너무너무 좋았다. 꽃사진이
          이뻤고 볼거리도…
        </Box>
        <Box marginTop="11px">
          <ItemAdditionalInfo />
        </Box>
      </Box>
    </FlexBox>
  );
}
