import { css } from '@emotion/react';

import { Box, FlexBox } from 'components/Atoms';
import Carousel from 'components/Molecules/Carousel';
import InnerHTML from 'components/Molecules/InnerHTML';
import NoItemBox from 'components/Molecules/NoItemBox';
import MyArchiveDetailHeaderInfo from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCardHeader';
import MyArchiveDetailCardInfo from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCardInfo';
import { MyArchiveDetailProps } from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailCard(contents: MyArchiveDetailProps) {
  return (
    <Box background={theme.colors.white} width="345px" margin="15px">
      <MyArchiveDetailHeaderInfo
        updatedAt={contents.updatedAt}
        typeBadge={contents.typeBadge}
        title={contents.title}
        archiveAdditionalInfos={contents.archiveAdditionalInfos}
      />
      <Box position="relative">
        <Box
          width="345px"
          height="345px"
          borderTop="solid 1px"
          borderTopColor={theme.colors.gray99}
        >
          {contents.photoUrls.length === 0 ? (
            <NoItemBox
              width="inherit"
              height="335px"
              text="사진"
              textColor={theme.colors.gray77}
              backgroundColor={theme.colors.grayF2}
            />
          ) : (
            <Carousel
              imgUrlArr={contents.photoUrls}
              width={'345px'}
              height={'345px'}
            />
          )}
        </Box>
        <FlexBox
          width="100%"
          height="118px"
          position="absolute"
          bottom="10px"
          justifyContent="center"
          alignItems="center"
        >
          {/* dim */}
          <Box
            position="absolute"
            width="325px"
            height="118px"
            backgroundColor={theme.colors.black}
            opacity={0.4}
          ></Box>
          <Box
            width="305px"
            height="88px"
            marginRight="15px"
            marginLeft="25px"
            overflowY="auto"
            lineHeight="18px"
            zIndex="1000"
            css={css`
              ::-webkit-scrollbar {
                display: block;
                width: 2px;
                height: 100%;
                background: gray;
              }
              ::-webkit-scrollbar-thumb {
                background: white;
              }
            `}
          >
            {contents.comment === '' ? (
              <NoItemBox
                width="inherit"
                height="inherit"
                text="코멘트"
                textColor={theme.colors.white}
              />
            ) : (
              <Box
                width="305px"
                maxHeight="118px"
                paddingRight="15px"
                fontSize="12px"
                textAlign="left"
                color={theme.colors.white}
              >
                <InnerHTML data={contents.comment} />
              </Box>
            )}
          </Box>
        </FlexBox>
      </Box>
      <MyArchiveDetailCardInfo
        starRating={contents.starRating}
        food={contents.food}
        cafe={contents.cafe}
      />
    </Box>
  );
}
