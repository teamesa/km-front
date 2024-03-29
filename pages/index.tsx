import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box } from 'components/Atoms';
import Footer from 'components/Organisms/Home/Footer';
import NowArchiveItem from 'components/Organisms/Home/Module/NowArchiveItem';
import ModuleResolver from 'components/Organisms/Home/ModuleResolver';
import { useResetHomeModulesFunction, homeModuleState } from 'states/home';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', frontTopTransparent: true });
  const data = useRecoilValueLoadable(homeModuleState);
  const resetHomeModules = useResetHomeModulesFunction();

  useEffect(() => {
    resetHomeModules();
  }, [resetHomeModules]);

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
          <NowArchiveItem index={0} contents={[]} />
          <Footer />
        </Box>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
};
export default Home;
