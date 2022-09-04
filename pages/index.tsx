import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { Box, Tag } from 'components/Atoms';
import KeyVisual from 'components/Organisms/Home/Module/KeyVisual';
import SwipeItem from 'components/Organisms/Home/Module/SwipeItem';
import ItemAdditionalInfo from 'components/Organisms/List/ListItem/ItemAdditionalInfo';
import ItemHeart from 'components/Organisms/List/ListItem/ItemHeart';
import theme from 'styles/theme';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const Home: NextPage = () => {
  useInitHeader({ headerLeft: 'logo', frontTopTransparent: true });

  return (
    <Box marginBottom="120px">
      <KeyVisual />
      <SwipeItem
        thumbnailPhotoUrl={
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png'
        }
        photoUrls={[
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
        ]}
        title={
          '영국 현대미술의 거장 : 마이클 크레이그 마틴展 영국 현대미술의 거장 : 마이클 크레이그 마틴展'
        }
        content={
          '마이클 크레이그 마틴, 선과 색으로 개념을그리다. 마이클 크레이그 마틴의 초기작 ‘참나무 (An Oak Tree 1973)’ 작품은 변기를 미술전에 출품한 마르셀 뒤샹의 바톤을 이어받아, 당시 미술계에 파격적인이슈가 됩니다. 갤러리 벽면에 ‘선반과 물 한 잔을 올려놓고 물컵이 아닌... 참나무라고명명한이작품은 개념미술사의중요한전환점이됩니다.'
        }
        keywords={['#전시회', '#한가람미술관']}
      />
      <SwipeItem
        thumbnailPhotoUrl={
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png'
        }
        photoUrls={[
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
        ]}
        title={
          '영국 현대미술의 거장 : 마이클 크레이그 마틴展 영국 현대미술의 거장 : 마이클 크레이그 마틴展'
        }
        content={
          '마이클 크레이그 마틴, 선과 색으로 개념을그리다. 마이클 크레이그 마틴의 초기작 ‘참나무 (An Oak Tree 1973)’ 작품은 변기를 미술전에 출품한 마르셀 뒤샹의 바톤을 이어받아, 당시 미술계에 파격적인이슈가 됩니다. 갤러리 벽면에 ‘선반과 물 한 잔을 올려놓고 물컵이 아닌... 참나무라고명명한이작품은 개념미술사의중요한전환점이됩니다.'
        }
        keywords={['#전시회', '#한가람미술관']}
      />
      <Box width="100%" paddingX="15px" marginTop="60px" marginBottom="20px">
        <Box
          textAlign="left"
          fontSize="22px"
          fontWeight={500}
          lineHeight={1.27}
          color={theme.colors.black}
        >
          <Box>이달의</Box>
          <Box>FREE TICKET</Box>
        </Box>
        <Box marginTop="20px" width="100%" height="120px" display="flex">
          <Box width="90px">
            <Image
              width={90}
              height={120}
              alt="image"
              src="https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-07-24/131516-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20%288%29.jpg"
            />
          </Box>
          <Box
            css={css`
              width: calc(100% - 90px - 20px);
            `}
            height="100%"
            paddingLeft="15px"
            paddingTop="10px"
          >
            <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
              전시회
            </Tag>
            <Box
              marginTop="10px"
              width="220px"
              fontSize="13px"
              fontWeight={500}
              lineHeight={1.54}
              textAlign="left"
              css={css`
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              `}
            >
              시작된 미래
            </Box>
            <ItemAdditionalInfo
              listItemAdditionalInfo={{
                heartCount: 1,
                grade: 3,
                archiveCount: 10,
              }}
              marginTop={10}
            />
          </Box>
          <Box width="20px" marginTop="10px" position="relative">
            <ItemHeart
              heart={{
                heartClicked: false,
                link: '',
                id: 0,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
