import NavHome from 'assets/common/bottomTabNavigator/NavHome';
import NavList from 'assets/common/bottomTabNavigator/NavList';
import NavMyPage from 'assets/common/bottomTabNavigator/NavMyPage';
import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Box } from 'components/Atoms';
import BottomTabNavigator from 'components/Organisms/Common/BottomTabNavigator';
import HeaderBar from 'components/Organisms/Common/HeaderBar';
import theme from 'styles/theme';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBar />
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
            path: ['/list'],
          },

          {
            selectedIcon: <NavWish fill={theme.colors.black} />,
            icon: <NavWish />,
            pathName: 'PICK',
            path: ['/wish'],
          },
          {
            selectedIcon: <NavMyPage fill={theme.colors.black} />,
            icon: <NavMyPage />,
            pathName: 'MY',
            path: ['/mypage'],
          },
        ]}
      />
    </>
  );
}
