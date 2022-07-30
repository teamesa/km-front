import Image from 'next/image';

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
      lineHeight="20px"
      textAlign="left"
      padding="40px 0px"
    >
      <Box>
        <InnerHTML data={data.summary} />
      </Box>
      {data.photo?.map((item, index) => (
        <Box marginTop="20px" key={index}>
          <Image
            src={
              !item
                ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
                : item
            }
            alt="image"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </Box>
      ))}
      <Box height="var(--platformBottomArea)" />
    </Box>
  );
}
