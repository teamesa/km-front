import { css } from '@emotion/react';
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
      padding="40px 0px"
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

      {/* {showMore ? (
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
        )} */}
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
