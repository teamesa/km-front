import { Box } from 'components/Atoms';
import TopTabView from 'components/Molecules/TopTabView';
import MyPageUserInfo from 'components/Organisms/MyPage/Home/MyPageUserInfo';
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
      <MyPageUserInfo />
      {/* 앵커 */}
      <TopTabView data={data} minusHeight={200}></TopTabView>
    </Box>
  );
}
