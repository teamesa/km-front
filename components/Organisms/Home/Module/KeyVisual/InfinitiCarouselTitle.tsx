import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import theme from 'styles/theme';

const InfiniteCarouselTitle = ({
  upperTitle,
  lowerTitle,
  link,
}: {
  upperTitle: string;
  lowerTitle: string;
  link?: string;
}) => {
  const router = useRouter();
  return (
    <Box paddingX="15px" onClick={link ? () => router.push(link) : () => {}}>
      <Box
        width="100%"
        fontSize="30px"
        color={theme.colors.white}
        lineHeight={1.2}
        textAlign="left"
        css={css`
          animation: titleSlide 700ms;
          @keyframes titleSlide {
            from {
              -webkit-transform: translate3d(100%, 0, 0);
              transform: translate3d(100%, 0, 0);
            }
            to {
              -webkit-transform: none;
              transform: none;
            }
          }
        `}
      >
        {upperTitle}
      </Box>
      <Box
        fontSize="30px"
        width="100%"
        color={theme.colors.white}
        lineHeight={1.2}
        textAlign="left"
        css={css`
          animation: titleSlide 900ms;
          @keyframes titleSlide {
            from {
              -webkit-transform: translate3d(100%, 0, 0);
              transform: translate3d(100%, 0, 0);
            }
            to {
              -webkit-transform: none;
              transform: none;
            }
          }
        `}
      >
        {lowerTitle}
      </Box>
    </Box>
  );
};
export default InfiniteCarouselTitle;
