import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { Box, Button, FlexBox, Span, Tag } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import {
  MyArchiveDetailHeaderInfoProps,
  ClickedItemId,
  ClickedArchiveId,
} from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailHeaderInfo(
  props: MyArchiveDetailHeaderInfoProps | undefined,
) {
  const router = useRouter();
  const archiveId = useRecoilValue(ClickedArchiveId);
  const itemId = useRecoilValue(ClickedItemId);
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

  const handleUpdateArchive = () => {
    handleClosePopup();
    archiveLink();
  };

  const archiveLink = () => {
    return router.push({
      pathname: `/archive/update`,
      query: {
        id: archiveId,
        exhibitionId: itemId,
      },
    });
  };

  const handleDeleteArchive = () => {
    setPopupName(POPUP_NAME.ALERT_ARCHIVE_DELETE_CANCEL_CONFIRM);
    setAlertState(ALERT_MESSAGE.ALERT.ARCHIVE_DELETE_CONFIRM);
  };

  return (
    <Box height="94px" padding="20px 17px">
      <FlexBox justifyContent="space-between">
        <FlexBox fontSize="11px" alignItems="center">
          <Tag
            backgroundColor={theme.colors.white}
            color={theme.colors.black}
            border="1px solid"
          >
            {props?.typeBadge.text}
          </Tag>
          <Span marginLeft="5px" color={theme.colors.gray99}>
            {props?.updatedAt}
          </Span>
        </FlexBox>
        <Box>
          <Button
            fontSize="12px"
            lineHeight="16px"
            color={theme.colors.gray77}
            marginRight="20px"
            borderBottom="1px solid"
            borderBottomColor={theme.colors.gray77}
            onClick={() => {
              handleUpdateArchive();
            }}
          >
            수정
          </Button>
          <Button
            fontSize="12px"
            lineHeight="16px"
            color={theme.colors.gray77}
            borderBottom="1px solid"
            borderBottomColor={theme.colors.gray77}
            onClick={() => {
              handleDeleteArchive();
            }}
          >
            삭제
          </Button>
        </Box>
      </FlexBox>
      <Box
        fontSize="15px"
        marginTop="15px"
        lineHeight="17px"
        fontWeight="Bold"
        overflow="hidden"
        display="-webkit-box"
        css={css`
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        `}
      >
        {props?.title}
      </Box>
    </Box>
  );
}
