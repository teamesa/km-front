import { css } from '@emotion/react';
import ItemImage from './ItemImage';
import ItemInfo from './ItemInfo';
import { Box, FlexBox, Span } from 'components/Atoms';
import { Pointer } from 'assets/mypage';
import { MyArchivePageContents } from 'states/myArchiveList';

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
  content: MyArchivePageContents;
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
        <ItemImage imageUrl={content.imageUrl} />
      </Box>
      <Box marginLeft="20px" flex={1}>
        <ItemInfo
          typeBadge={content.typeBadge}
          presentationTitle={content.title}
          updatedDate={content.updateAt}
          isMultiImages={content.existArchiveImages}
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
          {content.comment}
        </Box>
        <Box marginTop="11px">
          <FlexBox>
            <Pointer width="11px" height="15px" />
            <Span marginLeft="10px" fontSize="12px" lineHeight="18px">
              {content.places}
            </Span>
          </FlexBox>
        </Box>
      </Box>
    </FlexBox>
  );
}
