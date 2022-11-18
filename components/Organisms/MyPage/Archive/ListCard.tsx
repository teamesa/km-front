import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import ItemImage from './ItemImage';
import ItemInfo from './ItemInfo';

import { Pointer } from 'assets/mypage';
import { Box, FlexBox, Span } from 'components/Atoms';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import { ClickedArchiveId } from 'states/myArchiveDetail';
import { MyArchivePageContents } from 'states/myArchiveList';

type ItemProps = {
  content: MyArchivePageContents;
};

export default function Item(props: ItemProps) {
  const content = props.content;
  const setPopupName = useSetRecoilState(PopupNameState);
  const setArchiveId = useSetRecoilState(ClickedArchiveId);
  const apiArr = content.api.split('/');
  return (
    <FlexBox
      position="relative"
      padding="0px 0px 40px"
      onClick={() => {
        setArchiveId(apiArr[4]);
        setPopupName(POPUP_NAME.POPUP_ARCHIVE_DETAIL);
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
        &:nth-of-type(1) {
          padding: 20px 0px 40px;
        }
        &:nth-last-of-type(1):before {
          display: none;
        }
      `}
    >
      <Box flex={0.3} width="75px" height="75px">
        <ItemImage imageUrl={content.listImageUrl} />
      </Box>
      <Box marginLeft="20px" flex={1}>
        <ItemInfo
          typeBadge={content.typeBadge}
          presentationTitle={content.title}
          updatedAt={content.updatedAt}
          isMultiImages={content.existArchiveImages}
        />
        <Box
          fontSize="13px"
          marginTop="10px"
          lineHeight="20px"
          fontWeight="Bold"
          overflow="hidden"
          display="-webkit-box"
          css={css`
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          `}
        >
          {content.title}
        </Box>
        <Box
          marginTop="6px"
          fontSize="12px"
          lineHeight="18px"
          overflow="hidden"
          display="-webkit-box"
          css={css`
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          `}
        >
          {content.comment}
        </Box>
        <Box marginTop="11px" display={content.places ? 'block' : 'none'}>
          <FlexBox alignItems="center">
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
