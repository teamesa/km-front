import { Box } from 'components/Atoms';
import MyPageUserInfo from 'components/Organisms/MyPage/Home/MyPageUserInfo';
import MyPageInfoFragment from 'components/Organisms/MyPage/MyPageInfoFragment';
import PopupRouter from 'components/Organisms/Popup/PopupRouter';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function MyPageHome() {
  useInitHeader({ headerLeft: 'disabled' });
  const data = [
    { title: 'MY 아카이브', contents: [] },
    { title: '설정', contents: [] },
  ];
  return (
    <Box paddingLeft="15px" paddingRight="15px">
      <PopupRouter />
      <MyPageUserInfo />
      <MyPageInfoFragment />
    </Box>
  );
}
