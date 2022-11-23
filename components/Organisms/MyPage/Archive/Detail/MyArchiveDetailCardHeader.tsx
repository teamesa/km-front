import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { Box, Button, FlexBox, Span, Tag } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import {
  MyArchiveDetailHeaderInfoProps,
  ClickedArchiveId,
} from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailHeaderInfo(
  props: MyArchiveDetailHeaderInfoProps,
) {
  const router = useRouter();
  const id = useRecoilValue(ClickedArchiveId);
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
        id: id,
        title: props?.title,
        thumbnailImageUrl: '',
        checked: true,
      },
    });
  };

  const handleDeleteArchive = () => {
    setPopupName(POPUP_NAME.ALERT_ARCHIVE_DELETE_CANCEL_CONFIRM);
    setAlertState(ALERT_MESSAGE.ALERT.ARCHIVE_DELETE_CONFIRM);
  };

  return (
    <Box height="99px" padding="20px 15px">
      <FlexBox justifyContent="space-between">
        <Box fontSize="11px" display="flex" alignItems="center">
          <Tag
            backgroundColor={theme.colors.white}
            color={theme.colors.black}
            border="1px solid"
          >
            {props.typeBadge.text}
          </Tag>
          <Span marginLeft="5px" color={theme.colors.gray99}>
            {props.updatedAt}
          </Span>
        </Box>
        <Box>
          <Button
            fontSize="12px"
            lineHeight="16px"
            color={theme.colors.gray77}
            marginRight="16px"
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
        marginTop="20px"
        lineHeight="22px"
        fontWeight="Bold"
        overflow="hidden"
        display="-webkit-box"
        css={css`
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        `}
      >
        {props.title}
      </Box>
    </Box>
  );
}
