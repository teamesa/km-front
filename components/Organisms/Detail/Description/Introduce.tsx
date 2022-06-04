import Image from 'next/image';
import { useState } from 'react';

import { Box, Button, Span } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import theme from 'styles/theme';

interface IntroduceProps {
  data: { summary: string; photo: string[] };
}
export default function Introduce({ data }: IntroduceProps) {
  const [showMore, setShowMore] = useState(false);
  return (
    <Box
      color={theme.colors.black}
      fontSize="13px"
      lineHeight="1.54"
      textAlign="left"
      padding="40px 15px"
    >
      <Box paddingBottom="10px">
        {showMore ? (
          <InnerHTML data={data.summary} />
        ) : (
          <Span>
            <InnerHTML data={data.summary.substring(0)} />
            ...
          </Span>
        )}
        {showMore ? null : (
          <Button
            fontSize="13px"
            color={theme.colors.orange}
            onClick={() => setShowMore(!showMore)}
          >
            more
          </Button>
        )}
      </Box>
      {data.photo?.map((item, index) => (
        <Box paddingTop="20px" key={index}>
          <Image
            src={
              !item
                ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
                : item
            }
            alt="image"
            width="345vmin"
            height="400vmin"
            objectFit="none"
          />
        </Box>
      ))}
      <Box height="var(--platformBottomArea)" />
    </Box>
  );
}
