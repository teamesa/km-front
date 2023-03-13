import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import noImage from 'assets/common/no_image_375x250.png';
import { Box } from 'components/Atoms';
import { PresentationPickImage } from 'states/pick';
import theme from 'styles/theme';

interface ImagePorps {
  presentationImage: PresentationPickImage;
}

export default function PickItemImage({ presentationImage }: ImagePorps) {
  const router = useRouter();
  return (
    <>
      <Box
        position="relative"
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
              left="50%"
              color={theme.colors.white}
              fontSize="22px"
              lineHeight="32px"
              zIndex="2"
              css={css`
                transform: translateX(-50%);
              `}
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
          width="170"
          height="228"
          layout="responsive"
          objectFit="cover"
        />
      </Box>
    </>
  );
}
