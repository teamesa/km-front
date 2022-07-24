import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Box, Button, Span } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import theme from 'styles/theme';

interface IntroduceProps {
  data: { summary: string; photo: string[] };
}
export default function Introduce({ data }: IntroduceProps) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (data.summary?.length < 300 || data.summary === null) {
      setShowMore(true);
    }
  }, [data.summary, data.summary?.length]);

  return (
    <Box
      color={theme.colors.black}
      fontSize="13px"
      lineHeight="20px"
      textAlign="left"
      padding="40px 15px 0 0"
    >
      {showMore ? (
        <Box>
          <InnerHTML data={data.summary} />
        </Box>
      ) : (
        <Box>
          <Box
            overflow="hidden"
            display="-webkit-box"
            css={css`
              text-overflow: ellipsis;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
            `}
          >
            <InnerHTML data={data.summary} />
          </Box>
          <Button
            fontSize="13px"
            color={theme.colors.orange}
            onClick={() => setShowMore(!showMore)}
          >
            more
          </Button>
        </Box>
      )}
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
