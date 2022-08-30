import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { Box } from 'components/Atoms';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', invisible: true });

  return (
    <Box marginBottom="120px">
      <Box position="relative" width="100%" height="500px">
        <Image
          src="https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/121430-ss.jpg"
          alt="image"
          layout="fill"
        />
        <Box position="absolute" bottom="60px">
          <Box paddingX="15px">
            <Box
              fontSize="30px"
              color={theme.colors.white}
              lineHeight={1.2}
              textAlign="left"
            >
              메인타이틀 최대 두줄
            </Box>
            <Box
              fontSize="30px"
              color={theme.colors.white}
              lineHeight={1.2}
              textAlign="left"
            >
              메인타이틀 최대 두줄
            </Box>
          </Box>
        </Box>
        <Box position="absolute" bottom="15px" right="15px">
          <Box display="flex">
            <Box
              color={theme.colors.white}
              fontWeight={500}
              fontSize="11px"
              marginRight="2px"
            >
              1 /
            </Box>
            <Box
              color={theme.colors.white}
              opacity={0.5}
              fontWeight={500}
              fontSize="11px"
            >
              10
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop="60px">
        <Box width="100%" height="420px">
          <Image
            width={315}
            height={420}
            alt="image"
            src="https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-07-24/131516-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20%288%29.jpg"
          />
        </Box>
      </Box>
      <Box paddingTop="20px" width="300px" paddingX="15px">
        <Box
          fontSize="19px"
          fontWeight={500}
          lineHeight={1.37}
          textAlign="left"
          color={theme.colors.black}
        >
          영국 현대미술의 거장 :<br />
          마이클 크레이그 마틴展
        </Box>
        <Box
          marginTop="10px"
          fontSize="13px"
          lineHeight={1.54}
          textAlign="left"
          color={theme.colors.black}
          height="98px"
          css={css`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          `}
        >
          마이클 크레이그 마틴, 선과 색으로 개념을그리다. 마이클 크레이그 마틴의
          초기작 ‘참나무 (An Oak Tree 1973)’ 작품은 변기를 미술전에 출품한
          마르셀 뒤샹의 바톤을 이어받아, 당시 미술계에 파격적인이슈가 됩니다.
          갤러리 벽면에 ‘선반과 물 한 잔을 올려놓고 물컵이 아닌...
          참나무라고명명한이작품은 개념미술사의중요한전환점이됩니다.
        </Box>
        <Box marginTop="20px" display="flex">
          <Box
            padding="6px 10px"
            color={theme.colors.gray33}
            lineHeight={1.45}
            fontSize="11px"
            border="solid 1px #ddd"
            marginRight="5px"
          >
            #전시회
          </Box>
          <Box
            padding="6px 10px"
            color={theme.colors.gray33}
            lineHeight={1.45}
            fontSize="11px"
            border="solid 1px #ddd"
          >
            #한가람미술관
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
