import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import ArchiveHome from 'components/Organisms/Archive/ArchiveHome';
import ArchiveLogin from 'components/Organisms/Archive/ArchiveLogin';
import theme from 'styles/theme';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Archive: NextPage<UserProps> = ({ user }) => {
  const router = useRouter();
  const { checked, exhibitionId } = router.query;

  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 기록하기',
    headerRight: 'disabled',
    headerLeftAction: () => {
      if (checked || exhibitionId) {
        return router.back();
      }
      return router.push('/mypage');
    },
  });

  if (!user.isLogin) {
    return <ArchiveLogin />;
  }
  return (
    <Box padding="0 15px" background={theme.colors.white}>
      <ArchiveHome />
      <Box height="60px" />
    </Box>
  );
};

export const getServerSideProps = useUserProps;
export default Archive;
