import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilRefresher_UNSTABLE } from 'recoil';

import { Box } from 'components/Atoms';
import NoLoginPage from 'components/Molecules/LoginPage';
import ArchiveCreateHome from 'components/Organisms/ArchiveCreate/ArchiveCreateHome';
import { getItemsInfo } from 'states/detail';
import theme from 'styles/theme';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Archive: NextPage<UserProps> = ({ user }) => {
  const router = useRouter();
  const { checked } = router.query;
  const refreshGetItemsInfo = useRecoilRefresher_UNSTABLE(getItemsInfo);

  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 기록하기',
    headerRight: 'disabled',
    headerLeftAction: () => {
      if (checked) {
        return router.back();
      }
      return router.push('/mypage');
    },
  });

  useEffect(() => {
    refreshGetItemsInfo();
  }, [refreshGetItemsInfo]);

  if (!user.isLogin) {
    return <NoLoginPage />;
  }
  return (
    <Box padding="0 15px" background={theme.colors.white}>
      <ArchiveCreateHome />
      <Box height="60px" />
    </Box>
  );
};

export const getServerSideProps = useUserProps;
export default Archive;
