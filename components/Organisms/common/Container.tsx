import NavHome from 'assert/commom/bottomTabNavigator/NavHome';
import NavList from 'assert/commom/bottomTabNavigator/NavList';
import NavMap from 'assert/commom/bottomTabNavigator/NavMap';
import NavMyPage from 'assert/commom/bottomTabNavigator/NavMyPage';
import NavWish from 'assert/commom/bottomTabNavigator/NavWish';
import { Box } from 'components/Atoms';
import BottomTabNavigator from 'components/Organisms/Common/BottomTabNavigator';
import HeaderBar from 'components/Organisms/Common/HeaderBar';

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
