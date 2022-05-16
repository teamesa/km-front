import { css } from '@emotion/react';

import { Box } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import theme from 'styles/theme';

interface IntroduceProps {
  data: { summary: string; photo: string[] };
}
export default function Introduce({ data }: IntroduceProps) {
  return (
    <Box
      color={theme.colors.black}
      fontSize="13px"
      lineHeight="1.54"
      textAlign="left"
      padding="40px 15px"
    >
      <Box paddingBottom="10px">
        <InnerHTML data={data.summary} />
      </Box>
      {data.photo.map((item, index) => (
        <Box paddingTop="20px" key={index}>
          임시로 넣은 데이터: {item}
        </Box>
      ))}
      <Box height="var(--platformBottomArea)" />
    </Box>
  );
}
