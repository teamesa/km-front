import { css } from '@emotion/react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import ItemInfo from './ItemInfo';

import noImage from 'assets/common/no_image_375x500.png';
import { Pointer } from 'assets/mypage';
import { Box, Button, FlexBox, Span } from 'components/Atoms';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import { ClickedArchiveId } from 'states/myArchiveDetail';
import { MyArchivePageContents } from 'states/myArchiveList';

type ItemProps = {
  content: MyArchivePageContents;
};

export default function ListCard(props: ItemProps) {
  const content = props.content;
  const setPopupName = useSetRecoilState(PopupNameState);
  const setArchiveId = useSetRecoilState(ClickedArchiveId);
  const apiArr = content.api.split('/');

  return (
    <Box
      position="relative"
      padding="0px 0px 40px"
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
        &:nth-last-of-type(1):before {
          display: none;
        }
      `}
    >
      <Button width="100%">
        <FlexBox justifyContent="flex-start">
          <Box
            flex={0.3}
            onClick={() => {
              setArchiveId(apiArr[4]);
            }}
          >
            <Box width="75px" height="75px" position="relative">
              <Image
                src={!content.listImageUrl ? noImage : content.listImageUrl}
                alt="image"
                layout="fill"
                objectFit="cover"
                width="75px"
                height="75px"
              />
            </Box>
          </Box>
          <Box
            marginLeft="20px"
            flex={1}
            textAlign="left"
            onClick={() => {
              setArchiveId(apiArr[4]);
              setPopupName(POPUP_NAME.POPUP_ARCHIVE_DETAIL);
            }}
            css={css`
              cursor: pointer;
            `}
          >
            <ItemInfo
              typeBadge={content.typeBadge}
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
      </Button>
    </Box>
  );
}
