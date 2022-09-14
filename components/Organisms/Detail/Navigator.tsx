import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import Share from 'assets/detail/Share';
import { Box, Button, FlexBox } from 'components/Atoms';
import NavigatorHeart from 'components/Organisms/Detail/NavigatorHeart';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { Z_INDEX } from 'constants/common';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, DetailState, PopupNameState } from 'states';
import { TGetSummary } from 'states/detail';
import { User } from 'states/user';
import theme from 'styles/theme';

export default function Navigator() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const { id } = router.query;
  const { contents, state } = useRecoilValueLoadable(DetailState(Number(id)));
  const data: TGetSummary = contents?.summary;
  const loginState = useRecoilValue(User);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const clipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setAlertState(ALERT_MESSAGE.ALERT.COPY_TO_CLIPBOARD);
        setPopupName(POPUP_NAME.ALERT_CONFIRM);
      })
      .catch(() => {
        setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
        setPopupName(POPUP_NAME.ALERT_CONFIRM);
      });
  };

  const archiveLink = () => {
    if (loginState.isLogin) {
      setAlertState(ALERT_MESSAGE.ALERT.ASK_LOGIN);
      setPopupName(POPUP_NAME.ALERT_LOGIN_CONFIRMATION);
      return null;
    }
    router.push({
      pathname: data?.itemInfoAdditionalInfo?.archiveLink.link,
      query: {
        id: id,
        title: data?.title,
        thumbnailImageUrl: data?.listImageUrl,
        checked: true,
      },
    });
  };

  switch (state) {
    case 'hasValue':
      return (
        <Box
          zIndex={Z_INDEX.SKY}
          backgroundColor={theme.colors.black}
          width="100%"
          bottom="0px"
          position="fixed"
          padding="0 15px"
        >
          <FlexBox
            height="60px"
            alignItems="center"
            justifyContent="space-between"
          >
            <FlexBox>
              <Box>
                <NavigatorHeart
                  heart={data?.itemInfoAdditionalInfo?.heart}
                  heartCount={data?.itemInfoAdditionalInfo?.heartCount}
                />
              </Box>
              <Button marginLeft="20px" marginTop="5px" onClick={clipboard}>
                <Share />
              </Button>
            </FlexBox>
            <Button
              fontSize="16px"
              fontWeight={500}
              textAlign="left"
              color={theme.colors.lime}
              onClick={archiveLink}
            >
              {data?.itemInfoAdditionalInfo?.archiveLink.title}
            </Button>
          </FlexBox>
          <Box width="100%" height="var(--platformBottomArea)" />
        </Box>
      );
    case 'loading':
      return (
        <Box
          zIndex={Z_INDEX.SKY}
          backgroundColor={theme.colors.black}
          width="100%"
          bottom="0px"
          position="fixed"
          padding="0 15px"
        />
      );
    case 'hasError':
      throw Error('상세페이지 정보를 가져오는데 실패했습니다.');
  }
}
