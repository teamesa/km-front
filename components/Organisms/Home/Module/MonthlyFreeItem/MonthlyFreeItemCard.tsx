import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, Tag } from 'components/Atoms';
import ItemAdditionalInfo from 'components/Organisms/List/ListItem/ItemAdditionalInfo';
import ItemHeart from 'components/Organisms/List/ListItem/ItemHeart';
import { useTurnPickstateFunction } from 'states/home';
import theme from 'styles/theme';

export default function MonthlyFreeItemCard({
  moduleIndex,
  content: {
    id: itemId,
    presentationImage: {
      url: presentationImageUrl,
      link: presentationImageLink,
    },
    title: { text: titleText, link: titleLink },
    listItemAdditionalInfo,
    heart,
    typeBadge: { text: typeBadgeString },
  },
}: {
  moduleIndex: number;
  content: {
    id: number;
    presentationImage: {
      url: string;
      link: string;
    };
    title: {
      text: string;
      link: string;
    };
    listItemAdditionalInfo: {
      archiveCount: number;
      grade: number;
      heartCount: number;
    };
    heart: { heartClicked: boolean; id: number; link: string };
    typeBadge: { text: string; typeBadge: boolean };
  };
}) {
  const router = useRouter();
  const turnPickState = useTurnPickstateFunction(moduleIndex, itemId);

  return (
    <Box width="100%" height="120px" display="flex" marginBottom="10px">
      <Box
        width="90px"
        onClick={() => {
          router.push(presentationImageLink);
        }}
      >
        <Image width={90} height={120} alt="image" src={presentationImageUrl} />
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
          {typeBadgeString}
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
          onClick={() => {
            router.push(titleLink);
          }}
        >
          {titleText}
        </Box>
        <ItemAdditionalInfo
          listItemAdditionalInfo={listItemAdditionalInfo}
          marginTop={10}
        />
      </Box>
      <Box width="20px" marginTop="9px" position="relative">
        <ItemHeart heart={heart} optionalFunction={turnPickState} />
      </Box>
    </Box>
  );
}
