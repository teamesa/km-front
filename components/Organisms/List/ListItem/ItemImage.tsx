import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import noImage from 'assets/common/no_image_375x250.png';
import { Box } from 'components/Atoms';
import type { PresentationImage } from 'states/list';
import theme from 'styles/theme';

interface ImagePorps {
  presentationImage: PresentationImage;
}

export default function ItemImage(props: ImagePorps) {
  const presentationImage = props.presentationImage;
  const router = useRouter();
  return (
    <>
      <Box
        position="relative"
        margin="0 -15px"
        css={css`
          cursor: pointer;
        `}
        onClick={() => {
          router.push(presentationImage.link);
        }}
      >
        {presentationImage.dimTarget ? (
          <>
            <Box
              position="absolute"
              top="0px"
              bottom="0px"
              left="0px"
              right="0px"
              backgroundColor={presentationImage.dimColor}
              opacity={presentationImage.opacity}
              zIndex="1"
            />
            <Box
              position="absolute"
              top="calc(50% - 16px)"
              left="calc(50% - 30px)"
              color={theme.colors.white}
              fontSize="26px"
              lineHeight="32px"
              zIndex="2"
            >
              {presentationImage.backgroundText}
            </Box>
          </>
        ) : (
          ''
        )}
        <Image
          src={!presentationImage.url ? noImage : presentationImage.url}
          alt="image"
          width="375"
          height="250"
          layout="responsive"
        />
      </Box>
    </>
  );
}
