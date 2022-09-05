import type { NextPage } from 'next';

import { Box } from 'components/Atoms';
import KeyVisual from 'components/Organisms/Home/Module/KeyVisual';
import { useInitHeader } from 'utils/hooks/useInitHeader';
import { useRecoilCallback, useRecoilValueLoadable } from 'recoil';
import { getHomeInfo, homeModuleState } from 'states/home';
import ModuleResolver from 'components/Organisms/Home/ModuleResolver';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', frontTopTransparent: true });
  const data = useRecoilValueLoadable(homeModuleState);

  const resetHomeModules = useRecoilCallback(
    ({ set }) =>
      async () => {
        const homeModuleData = await getHomeInfo();
        set(homeModuleState, homeModuleData);
      },
    [],
  );

  useEffect(() => {
    resetHomeModules();
  }, []);

  switch (data.state) {
    case 'hasValue':
      return (
        <Box marginBottom="120px">
          <KeyVisual />
          {data.contents.map(({ moduleName, data }, index) => (
            <ModuleResolver
              moduleName={moduleName}
              data={data}
              key={`${moduleName}-${index}`}
            />
          ))}
        </Box>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
};
export default Home;
