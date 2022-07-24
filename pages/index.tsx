import type { NextPage } from 'next';
import { useRecoilState, useSetRecoilState } from 'recoil';

import ArrowDown from 'assets/list/ArrowDown';
import { Box, Button, FlexBox, Layout, Tag } from 'components/Atoms';
import Select from 'components/Atoms/Select';
import ListFilter from 'components/Molecules/ListFilter';
import ListCategory from 'components/Organisms/List/ListCategory';
import PopupRouter from 'components/Organisms/Popup/PopupRouter';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', headerEnd: 'home' });
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);

  return (
    <>
      <Layout>
        <PopupRouter />
        <Box margin="14px 0 10px">
          <Tag color={theme.colors.lime} background={theme.colors.black}>
            전시회
          </Tag>
          <Tag color={theme.colors.black} background={theme.colors.grayEE}>
            D-63
          </Tag>
        </Box>
        <hr />
        <Box>fontWeight Test</Box>
        <Box fontWeight={700}>bold - 700</Box>
        <Box fontWeight={500}>medium - 500</Box>
        <Box fontWeight={400}>normal - 400</Box>
        <Box fontWeight={200}>light - 300</Box>
        <Button
          onClick={() => {
            setAlertState(ALERT_MESSAGE.ALERT.COPY_TO_CLIPBOARD);
            setPopupName(POPUP_NAME.ALERT_SUCCESS);
          }}
        >
          확인팝업 띄우기
        </Button>
      </Layout>
    </>
  );
};

export default Home;
