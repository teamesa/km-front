import { useRecoilValueLoadable } from 'recoil';

import { Box, Span } from 'components/Atoms';
import { pickState } from 'states/pick';
import theme from 'styles/theme';

export default function PickTitle() {
  const pickCount = useRecoilValueLoadable(pickState);

  if (pickCount.state !== 'hasValue') return <></>;

  return (
    <>
      <Box
        padding="0px 15px 30px 15px"
        fontSize="22px"
        lineHeight="27px"
        fontWeight="500"
      >
        {pickCount.contents.count !== 0 ? (
          <Span
            display="inline-block"
            marginRight="3px"
            color={theme.colors.orange}
          >
            {pickCount.contents.count}
          </Span>
        ) : (
          ''
        )}
        PICK
      </Box>
    </>
  );
}
