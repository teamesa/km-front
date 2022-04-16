import Home from 'assert/home/home';
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
            selectedIcon: <Home fill="#ceff00" />,
            icon: <Home />,
            path: ['/list'],
          },
          {
            selectedIcon: <Home fill="#ceff00" />,
            icon: <Home />,
            path: ['/'],
          },
        ]}
      />
    </>
  );
}
