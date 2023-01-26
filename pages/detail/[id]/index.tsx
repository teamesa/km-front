import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import Description from 'components/Organisms/Detail/Description';
import ExhibitionImagesSection from 'components/Organisms/Detail/ExhibitionImagesSection';
import Navigator from 'components/Organisms/Detail/Navigator';
import {
  useResetDetailArchiveFunction,
  useResetSummaryFunction,
} from 'states/detail';
import { User } from 'states/user';
import theme from 'styles/theme';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Detail: NextPage<UserProps> = ({ user }) => {
  const router = useRouter();
  useInitHeader({
    headerLeft: 'default',
    headerEnd: 'home',
    headerLeftAction: () => router.back(),
  });
  const setUserFirst = useSetRecoilState(User);
  const resetArchiveState = useResetDetailArchiveFunction();
  const resetPickState = useResetSummaryFunction();

  useEffect(() => {
    setUserFirst(user);
    resetArchiveState();
    resetPickState();
  }, [resetArchiveState, resetPickState, setUserFirst, user]);

  return (
    <Box backgroundColor={theme.colors.grayEE}>
      <Box height="5px" />
      <ExhibitionImagesSection />
      {/* <Description /> */}
      {/* <Navigator /> */}
    </Box>
  );
};

export const getServerSideProps = useUserProps;
export default Detail;
