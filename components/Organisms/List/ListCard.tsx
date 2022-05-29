import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import ListWish from 'assets/list/ListWish';
import StarRating from 'assets/list/StarRating';
import { Box, Button, FlexBox, Tag, Span } from 'components/Atoms';
import ItemAdditionalInfo from 'components/Organisms/List/ItemAdditionalInfo';
import ItemHeart from 'components/Organisms/List/ItemHeart';
import ItemImage from 'components/Organisms/List/ItemImage';
import ItemInfo from 'components/Organisms/List/ItemInfo';
import { ListState } from 'states';
import type { ListPageContents } from 'states/list';
import theme from 'styles/theme';

type ItemProps = {
  index: number;
  content: ListPageContents;
  pickClicked: Function;
};

export default function Item(props: ItemProps) {
  const content = props.content;
  const router = useRouter();

  return (
    <>
      <Box margin="0px 0px 40px">
        <ItemImage presentationImage={content.presentationImage} />
        <Box position="relative">
          <ItemHeart heart={content.heart} />
          <ItemInfo
            typeBadge={content.typeBadge}
            additionalBadgeList={content.additionalBadgeList}
            presentationTitle={content.title}
          />
          <ItemAdditionalInfo
            listItemAdditionalInfo={content.listItemAdditionalInfo}
          />
        </Box>
      </Box>
      {/* <Box margin="0px 0px 40px">
        <Box
          position="relative"
          css={css`
            cursor: pointer;
          `}
          onClick={() => {
            router.push(content.presentationImage.link);
          }}
        >
          {content.presentationImage.dimTarget ? (
            <>
              <Box
                position="absolute"
                top="0px"
                bottom="0px"
                left="0px"
                right="0px"
                backgroundColor={content.presentationImage.dimColor}
                opacity={content.presentationImage.opacity}
                zIndex="1"
              />
              <Box
                position="absolute"
                top="50%"
                left="calc(50% - 30px)"
                color={theme.colors.white}
                fontSize="26px"
                zIndex="2"
                css={css`
                  transform: transition(-50%, -50%);
                `}
              >
                {content.presentationImage.backgroundText}
              </Box>
              <Image
                src={
                  !content.presentationImage.url
                    ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
                    : content.presentationImage.url
                }
                alt="image"
                width="375"
                height="250"
                layout="responsive"
              />
            </>
          ) : (
            <Image
              src={
                !content.presentationImage.url
                  ? 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
                  : content.presentationImage.url
              }
              alt="image"
              width="375"
              height="250"
              layout="responsive"
            />
          )}
        </Box>
        <Box position="relative">
          <Box margin="14px 0px 10px">
            <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
              {content.typeBadge.text}
            </Tag>
            {content.additionalBadgeList.map((badge, index) => (
              <Tag
                backgroundColor={theme.colors.grayEE}
                color={theme.colors.black}
                key={index}
              >
                {badge.text}
              </Tag>
            ))}
          </Box>
          <Button
            position="absolute"
            right="0px"
            top="0px"
            onClick={() => {
              console.log(content.heart.heartClicked);
              props.pickClicked(
                `${content.heart.link}${!content.heart.heartClicked}`,
                props.index,
                !content.heart.heartClicked,
              );
            }}
          >
            {content.heart.heartClicked ? (
              <NavWish width="17" height="16" fill={theme.colors.black} />
            ) : (
              <NavWish width="17" height="16" />
            )}
          </Button>
          <Box
            margin="0px 0px 15px"
            fontSize="15px"
            lineHeight="18px"
            fontWeight="500"
            css={css`
              cursor: pointer;
            `}
            onClick={() => {
              router.push(content.title.link);
            }}
          >
            {content.title.text}
          </Box>
          <FlexBox>
            {content.listItemAdditionalInfo.heartCount ? (
              <Box fontSize="9px" lineHeight="12px">
                <ListWish width="10" height="9" fill={theme.colors.gray99} />
                <Span
                  display="inline-block"
                  marginLeft="2px"
                  verticalAlign="top"
                >
                  {content.listItemAdditionalInfo.heartCount}
                </Span>
              </Box>
            ) : (
              ''
            )}
            {content.listItemAdditionalInfo.grade ? (
              <Box marginLeft="10px" fontSize="9px" lineHeight="12px">
                <StarRating width="10" height="10" fill="#999" />
                <Span
                  display="inline-block"
                  marginLeft="2px"
                  verticalAlign="top"
                >
                  {content.listItemAdditionalInfo.grade} (
                  {content.listItemAdditionalInfo.archiveCount})
                </Span>
              </Box>
            ) : (
              ''
            )}
          </FlexBox>
        </Box>
      </Box> */}
    </>
  );
}
