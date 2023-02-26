import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Box } from 'components/Atoms';
import DescriptionContents from 'components/Organisms/Detail/DescriptionContents';
import ExhibitionImage from 'components/Organisms/Detail/ExhibitionImage';
import ItemInfo from 'components/Organisms/Detail/ItemInfo';
import Navigator from 'components/Organisms/Detail/Navigator';
import { User } from 'states/user';
import theme from 'styles/theme';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Detail: NextPage<UserProps> = ({ user }) => {
  const router = useRouter();
  const setUserFirst = useSetRecoilState(User);

  useInitHeader({
    headerLeft: 'default',
    headerEnd: 'home',
    headerLeftAction: () => router.back(),
  });

  useEffect(() => {
    setUserFirst(user);
  }, [setUserFirst, user]);

  return (
    <Box backgroundColor={theme.colors.grayEE}>
      <Box height="5px" />
      <ExhibitionImage />
      <Box position="relative" top="390px">
        <Box
          height="25px"
          backgroundColor={theme.colors.white}
          borderRadius="24px 24px 0px 0px"
        />
        <Box
          backgroundColor={theme.colors.white}
          padding="0 15px 60px"
          marginTop="-1px"
        >
          <ItemInfo />
          <DescriptionContents />
        </Box>
      </Box>
      <Navigator />
    </Box>
  );
};

export const getServerSideProps = useUserProps;
export default Detail;
