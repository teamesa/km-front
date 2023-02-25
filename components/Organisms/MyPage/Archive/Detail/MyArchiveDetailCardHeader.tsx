import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { Box, Button, FlexBox, Span, Tag } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import {
  MyArchiveDetailHeaderInfoProps,
  ClickedArchiveDeleteUrl,
} from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailHeaderInfo(
  contents: MyArchiveDetailHeaderInfoProps,
) {
  const router = useRouter();
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const setClickedArchiveDeleteUrl = useSetRecoilState(ClickedArchiveDeleteUrl);
  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

  //TODO: 아카이브 수정하기 엔드포인트 안고쳐진듯?
  const handleUpdateArchive = (api: string) => {
    handleClosePopup();
    updateArchiveLink(api);
  };

  const updateArchiveLink = (api: string) => {
    return router.push(api);
  };

  const handleDeleteArchive = () => {
    setClickedArchiveDeleteUrl(contents?.archiveActionButton[1].link);
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
            {contents?.typeBadge?.text}
          </Tag>
          <Span marginLeft="5px" color={theme.colors.gray99}>
            {contents?.updatedAt}
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
              handleUpdateArchive(contents?.archiveActionButton[0].link);
            }}
          >
            {contents?.archiveActionButton[0].title}
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
            {contents?.archiveActionButton[1].title}
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
        {contents?.title}
      </Box>
    </Box>
  );
}
