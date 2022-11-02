import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import Description from 'components/Organisms/Detail/Description';
import ExhibitionImagesSection from 'components/Organisms/Detail/ExhibitionImagesSection';
import Navigator from 'components/Organisms/Detail/Navigator';
import { useResetDetailArchiveFunction } from 'states/detail';
import { User } from 'states/user';
import theme from 'styles/theme';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Detail: NextPage<UserProps> = ({ user }) => {
  useInitHeader({ headerLeft: 'default', headerEnd: 'home' });
  const resetArchiveState = useResetDetailArchiveFunction();
  const [users, setUserFirst] = useRecoilState(User);

  useEffect(() => {
    setUserFirst(user);
    resetArchiveState();
  }, [resetArchiveState, setUserFirst, user]);

  return (
    <Box backgroundColor={theme.colors.grayEE}>
      <Box height="5px" />
      <ExhibitionImagesSection />
      <Description />
      <Navigator />
    </Box>
  );
};

export const getServerSideProps = useUserProps;
export default Detail;
