import { useRouter } from 'next/router';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import useCopy from 'use-copy';

import Share from 'assets/detail/Share';
import { Box, Button, FlexBox } from 'components/Atoms';
import NavigatorHeart from 'components/Organisms/Detail/NavigatorHeart';
import PopupRouter from 'components/Organisms/Popup/PopupRouter';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { Z_INDEX } from 'constants/common';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, DetailState, PopupNameState } from 'states';
import { TGetSummary } from 'states/detail';
import theme from 'styles/theme';

export default function Navigator() {
  const router = useRouter();
  const { id } = router.query;
  const data = useRecoilValueLoadable(DetailState(Number(id)));
  const contents: TGetSummary = data?.contents?.summary;
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const [_, copy, setCopied] = useCopy(`${window.location.href}`);

  const handle = () => {
    if (navigator.share) {
      navigator.share({
        title: '공유하기',
        text: '전시회 공유하기',
        url: `${window.location.href}`,
      });
      setAlertState(ALERT_MESSAGE.ALERT.COPY_TO_CLIPBOARD);
      setPopupName(POPUP_NAME.ALERT_CONFIRM);
    } else {
      copy();
      setTimeout(() => {
        setCopied(false);
        setAlertState(ALERT_MESSAGE.ALERT.COPY_TO_CLIPBOARD);
        setPopupName(POPUP_NAME.ALERT_CONFIRM);
      }, 200);
    }
  };

  switch (data.state) {
    case 'hasValue':
      return (
        <>
          <PopupRouter />
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
                    heart={contents?.itemInfoAdditionalInfo?.heart}
                    heartCount={contents?.itemInfoAdditionalInfo?.heartCount}
                  />
                </Box>
                <Box marginLeft="20px" marginTop="5px" onClick={handle}>
                  <Share />
                </Box>
              </FlexBox>
              <Button
                fontSize="16px"
                fontWeight={500}
                textAlign="left"
                color={theme.colors.lime}
                onClick={() => {
                  router.push({
                    pathname: '/archive',
                    query: {
                      id: id,
                      title: contents?.title,
                      thumbnailImageUrl: contents?.listImageUrl,
                      checked: true,
                    },
                  });
                }}
              >
                아카이브 기록하기
              </Button>
            </FlexBox>
            <Box width="100%" height="var(--platformBottomArea)" />
          </Box>
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
}
function setAlertState(COPY_TO_CLIPBOARD: any) {
  throw new Error('Function not implemented.');
}

function setPopupName(ALERT_CONFIRM: any) {
  throw new Error('Function not implemented.');
}
