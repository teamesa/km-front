import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import CarouselDim from 'components/Molecules/CarouselDim';
import theme from 'styles/theme';
import { css } from '@emotion/react';

const HomeListCard = ({
  photoUrl,
  upperTitle,
  lowerTitle,
  link,
}: {
  photoUrl: string;
  upperTitle: string;
  lowerTitle: string;
  link?: string;
}) => {
  const router = useRouter();
  return (
    <Box position="relative" width="100%" height="500px" marginBottom="15px">
      <Image src={photoUrl} alt="image" layout="fill" />
      <CarouselDim height={'500px'} />
      <Box
        position="absolute"
        bottom="60px"
        onClick={
          link
            ? () => {
                router.push(link);
              }
            : () => {}
        }
        css={
          link
            ? css`
                cursor: pointer;
              `
            : css`
                cursor: default;
              `
        }
      >
        <Box paddingX="15px">
          <Box
            fontSize="30px"
            color={theme.colors.white}
            lineHeight={1.2}
            textAlign="left"
          >
            {upperTitle}
          </Box>
          <Box
            fontSize="30px"
            color={theme.colors.white}
            lineHeight={1.2}
            textAlign="left"
          >
            {lowerTitle}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HomeListCard;
