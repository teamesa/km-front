import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import NavHome from 'assets/common/bottomTabNavigator/NavHome';
import NavList from 'assets/common/bottomTabNavigator/NavList';
import NavMyPage from 'assets/common/bottomTabNavigator/NavMyPage';
import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Box } from 'components/Atoms';
import BottomTabNavigator from 'components/Organisms/Common/BottomTabNavigator';
import HeaderBar from 'components/Organisms/Common/HeaderBar';
import SearchHeaderBar from 'components/Organisms/Common/SearchHeaderBar';
import { modalOutState } from 'states/modal';
import { setPopup } from 'states/popupName';
import theme from 'styles/theme';

export default function Container({ children }: { children: ReactNode }) {
  const PopupState = useRecoilValue(setPopup);
  const modalOut = useRecoilValue(modalOutState);

  return (
    <Box
      position="relative"
      width="100%"
      maxWidth={theme.view.webView}
      minHeight="100%"
      margin="0 auto"
      boxShadow="0 0 20px rgb(0 0 0 / 5%);"
      style={
        modalOut || PopupState
          ? { position: 'fixed', inset: '0', touchAction: 'none' }
          : {}
      }
    >
      <HeaderBar />
      <SearchHeaderBar />
      <Box>{children}</Box>
      <BottomTabNavigator
        data={[
          {
            selectedIcon: <NavHome fill={theme.colors.black} />,
            icon: <NavHome />,
            pathName: 'HOME',
            path: ['/'],
          },
          {
            selectedIcon: <NavList fill={theme.colors.black} />,
            icon: <NavList />,
            pathName: 'LIST',
            path: ['/list', '/search/result'],
          },

          {
            selectedIcon: <NavWish fill={theme.colors.black} />,
            icon: <NavWish />,
            pathName: 'PICK',
            path: ['/pick'],
          },
          {
            selectedIcon: <NavMyPage fill={theme.colors.black} />,
            icon: <NavMyPage />,
            pathName: 'MY',
            path: ['/mypage'],
          },
        ]}
      />
    </Box>
  );
}
