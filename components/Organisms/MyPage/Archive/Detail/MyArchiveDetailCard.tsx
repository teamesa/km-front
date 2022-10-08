import { css } from '@emotion/react';

import { Box } from 'components/Atoms';
import Carousel from 'components/Molecules/Carousel';
import InnerHTML from 'components/Molecules/InnerHTML';
import NoItemBox from 'components/Molecules/NoItemBox';
import MyArchiveDetailHeaderInfo from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCardHeader';
import MyArchiveDetailCardInfo from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCardInfo';
import { MyArchiveDetailProps } from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailCard(contents: MyArchiveDetailProps) {
  return (
    <Box background="#fff" width="345px" height="652px" margin="15px">
      <MyArchiveDetailHeaderInfo
        updatedAt={contents.updatedAt}
        typeBadge={contents.typeBadge}
        title={contents.title}
        archiveAdditionalInfos={contents.archiveAdditionalInfos}
      />
      <Box
        width="345px"
        height="347px"
        borderTop="solid 1px"
        borderTopColor={theme.colors.gray99}
        borderBottom="solid 1px"
        borderBottomColor={theme.colors.gray99}
      >
        {contents.photoUrls.length === 0 ? (
          <NoItemBox width="inherit" height="inherit" text="사진 " />
        ) : (
          <Carousel
            imgUrlArr={contents.photoUrls}
            width={'345px'}
            height={'345px'}
          />
        )}
      </Box>
      <Box
        height="88px"
        margin="20px 5px"
        overflowY="auto"
        fontSize="12px"
        textAlign="left"
        lineHeight="18px"
        css={css`
          ::-webkit-scrollbar {
            display: block;
            width: 2px;
            height: 100%;
            background: gray;
          }
          ::-webkit-scrollbar-thumb {
            background: #000;
          }
        `}
      >
        {contents.comment === '' ? (
          <NoItemBox width="inherit" height="inherit" text="코멘트" />
        ) : (
          <Box width="inherit" height="fit-content" margin="0 10px">
            <InnerHTML data={contents.comment} />
          </Box>
        )}
      </Box>
      <MyArchiveDetailCardInfo
        starRating={contents.starRating}
        food={contents.food}
        cafe={contents.cafe}
      />
    </Box>
  );
}
