import { css } from '@emotion/react';
import styled from '@emotion/styled/types/base';

import ItemAdditionalInfo from './ItemAdditionalInfo';
import ItemImage from './ItemImage';
import ItemInfo from './ItemInfo';

import { Profile } from 'assets/mypage';
import { Box, FlexBox } from 'components/Atoms';
import type { ListPageContents } from 'states/list';

// const af = styled.li`
//   &:before {
//     content: '·';
//     font-size: 20px;
//     vertical-align: middle;
//     line-height: 20px;
//     padding-right: 5px;
//   }
// `;

type ItemProps = {
  content: ListPageContents;
};

export default function Item(props: ItemProps) {
  const content = props.content;
  return (
    <FlexBox
      position="relative"
      padding="0px 0px 40px"
      onClick={() => {
        alert('클릭됐어요');
      }}
      css={css`
        &:before {
          content: '';
          position: absolute;
          left: 37.5px;
          top: 75px;
          bottom: 0;
          width: 1px;
          background: #ddd;
        }
        &:nth-child(1) {
          padding: 20px 0px 40px;
        }
        &:nth-last-child(1):before {
          display: none;
        }
      `}
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
