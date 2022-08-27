import { useRecoilValue } from 'recoil';

import { Box, Span } from 'components/Atoms';
import { PickState } from 'states';
import theme from 'styles/theme';

export default function PickTitle() {
  const pickCount = useRecoilValue(PickState);

  return (
    <>
      <Box
        padding="0px 15px 30px 15px"
        fontSize="22px"
        lineHeight="27px"
        fontWeight="500"
      >
        <Span
          display="inline-block"
          marginRight="3px"
          color={theme.colors.orange}
        >
          {pickCount.count}
        </Span>
        PICK
      </Box>
    </>
  );
}
