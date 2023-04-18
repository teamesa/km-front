import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { User } from 'states/user';
import { Box } from 'components/Atoms';
import Footer from 'components/Organisms/Home/Footer';
import ModuleResolver from 'components/Organisms/Home/ModuleResolver';
import { useResetHomeModulesFunction, homeModuleState } from 'states/home';
import { useInitHeader } from 'utils/hooks/useInitHeader';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import theme from 'styles/theme';

const Home: NextPage<UserProps> = ({ user }) => {
  useInitHeader({ headerLeft: 'logo', frontTopTransparent: true });
  const data = useRecoilValueLoadable(homeModuleState);
  const resetHomeModules = useResetHomeModulesFunction();
  const setUserFirst = useSetRecoilState(User);

  useEffect(() => {
    resetHomeModules();
  }, [resetHomeModules]);

  useEffect(() => {
    setUserFirst(user);
  }, [user, setUserFirst]);

  switch (data.state) {
    case 'hasValue':
      return (
        <Box paddingBottom="120px">
          {data.contents.map(({ moduleName, data }, index) => (
            <ModuleResolver
              moduleName={moduleName}
              data={data}
              index={index}
              key={`${moduleName}-${index}`}
            />
          ))}
          <Footer />
        </Box>
      );
    case 'loading':
      return <Box width={theme.view.webView} height="100vh" background={theme.colors.white}/>;
    case 'hasError':
      throw data.contents;
  }
};
export default Home;
export const getServerSideProps = useUserProps;
