import NavHome from 'assets/common/bottomTabNavigator/NavHome';
import NavList from 'assets/common/bottomTabNavigator/NavList';
import NavMap from 'assets/common/bottomTabNavigator/NavMap';
import NavMyPage from 'assets/common/bottomTabNavigator/NavMyPage';
import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Box } from 'components/Atoms';
import BottomTabNavigator from 'components/Organisms/common/BottomTabNavigator';
import HeaderBar from 'components/Organisms/common/HeaderBar';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBar />
      <Box>{children}</Box>
      <BottomTabNavigator
        data={[
          {
            selectedIcon: <NavMap fill="#ceff00" />,
            icon: <NavMap />,
            path: ['/map'],
          },
          {
            selectedIcon: <NavList fill="#ceff00" />,
            icon: <NavList />,
            path: ['/list'],
          },
          {
            selectedIcon: <NavHome fill="#ceff00" />,
            icon: <NavHome />,
            path: ['/'],
          },
          {
            selectedIcon: <NavWish fill="#ceff00" />,
            icon: <NavWish />,
            path: ['/wish'],
          },
          {
            selectedIcon: <NavMyPage fill="#ceff00" />,
            icon: <NavMyPage />,
            path: ['/mypage'],
          },
        ]}
      />
    </>
  );
}
