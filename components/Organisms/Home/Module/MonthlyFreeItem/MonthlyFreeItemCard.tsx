import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import noImage from 'assets/common/no_image_375x500.png';
import { Box, FlexBox, Tag } from 'components/Atoms';
import ItemAdditionalInfo from 'components/Organisms/List/ListItem/ItemAdditionalInfo';
import ItemHeart from 'components/Organisms/List/ListItem/ItemHeart';
import { useTurnPickStateFunction } from 'states/home';
import theme from 'styles/theme';
import { MonthlyFreeItemCardProps } from 'components/Organisms/Home/ModuleTypes';
export default function MonthlyFreeItemCard({
  moduleIndex,
  content,
}: {
  moduleIndex: number;
  content: MonthlyFreeItemCardProps;
}) {
  const router = useRouter();
  const turnPickState = useTurnPickStateFunction(moduleIndex, content.id);

  return (
    <FlexBox width="100%" height="120px" marginBottom="10px">
      <Box
        aria-label="해당 아이템 링크"
        role="link"
        width="90px"
        onClick={() => {
          router.push(content.presentationImage.link);
        }}
        css={css`
          cursor: pointer;
        `}
      >
        <Image
          width={90}
          height={120}
          alt="image"
          src={
            !content.presentationImage.url
              ? noImage
              : content.presentationImage.url
          }
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
          {content.typeBadge.text}
        </Tag>
        <Box
          aria-label="해당 아이템 링크"
          role="link"
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
            cursor: pointer;
          `}
          onClick={() => {
            router.push(content.title.link);
          }}
        >
          {content.title.text}
        </Box>
        <ItemAdditionalInfo
          listItemAdditionalInfo={content.listItemAdditionalInfo}
          marginTop={10}
        />
      </Box>
      <Box width="20px" marginTop="9px" position="relative">
        <ItemHeart heart={content.heart} optionalFunction={turnPickState} />
      </Box>
    </FlexBox>
  );
}
