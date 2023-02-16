import { useRecoilValue } from 'recoil';

import { Box, FlexBox } from 'components/Atoms';
import { Loader } from 'components/Atoms/Loader';
import { Z_INDEX } from 'constants/common';
import { loadingState } from 'states/loading';
import theme from 'styles/theme';

export default function LoadingScreen() {
  const loading = useRecoilValue(loadingState);
  if (!loading) {
    return <></>;
  } else {
    return (
      <FlexBox
        zIndex={Z_INDEX.LOADING}
        position="fixed"
        top="0"
        left="0"
        background={theme.colors.black}
        opacity="0.7"
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="80px" height="80px">
          <Loader />
        </Box>
      </FlexBox>
    );
  }
}
