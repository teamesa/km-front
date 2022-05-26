import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import ListWish from 'assets/list/ListWish';
import StarRating from 'assets/list/StarRating';
import { Box, Button, FlexBox, Tag, Span } from 'components/Atoms';
import type { TGetList } from 'states/list';
import theme from 'styles/theme';

// interface ItemProps {
//   data: {
//     presentationImage: {
//       url: string;
//       backgroundText: string | null;
//       dimColor: string | null;
//       opacity: number;
//       dimTarget: boolean;
//     };
//     typeBadge: {
//       text: string;
//       typeBadge: boolean;
//     };
//     additionalBadgeList: {
//       text: string;
//       typeBadge: boolean;
//     }[];
//     title: string;
//     setHearted: boolean;
//     listItemAdditionalInfo: {
//       heartCount: number | string;
//       grade: number | null;
//       archiveCount: number | null;
//     };
//   }[];
// }

export default function Item({ contents }: any) {
  console.log(contents);
  const router = useRouter();
  return (
    <>
      {/* {contents.map((item, index) => {
        return (
          <Box key={index} margin="0px 0px 40px">
            {item.presentationImage.dimTarget ? (
              <Box
                position="relative"
                margin="0px -15px"
                onClick={() => {
                  router.push(item.presentationImage.link);
                }}
              >
                <Box
                  position="absolute"
                  top="0px"
                  bottom="0px"
                  left="0px"
                  right="0px"
                  backgroundColor={item.presentationImage.dimColor}
                  opacity={item.presentationImage.opacity}
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
                  {item.presentationImage.backgroundText}
                </Box>
                <Image
                  src="https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg"
                  alt="image"
                  width="375"
                  height="250"
                  layout="responsive"
                />
              </Box>
            ) : (
              <Box margin="0px -15px">
                <Image
                  src="https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg"
                  alt="image"
                  width="375"
                  height="250"
                  layout="responsive"
                />
              </Box>
            )}
            <Box position="relative">
              <Box margin="14px 0px 10px">
                <Tag
                  backgroundColor={theme.colors.black}
                  color={theme.colors.lime}
                >
                  {item.typeBadge.text}
                </Tag>
                <Tag
                  backgroundColor={theme.colors.grayEE}
                  color={theme.colors.black}
                >
                  {item.additionalBadgeList[0].text}
                </Tag>
                <Tag
                  backgroundColor={theme.colors.grayEE}
                  color={theme.colors.black}
                >
                  {item.additionalBadgeList[1].text}
                </Tag>
              </Box>
              <Button position="absolute" right="0px" top="0px">
                {item.heart.heartClicked ? (
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
              >
                {item.title}
              </Box>
              <FlexBox>
                {item.listItemAdditionalInfo.heartCount ? (
                  <Box fontSize="9px" lineHeight="12px">
                    <ListWish
                      width="10"
                      height="9"
                      fill={theme.colors.gray99}
                    />
                    <Span
                      display="inline-block"
                      marginLeft="2px"
                      verticalAlign="top"
                    >
                      {item.listItemAdditionalInfo.heartCount}
                    </Span>
                  </Box>
                ) : (
                  ''
                )}
                {item.listItemAdditionalInfo.grade ? (
                  <Box marginLeft="10px" fontSize="9px" lineHeight="12px">
                    <StarRating width="10" height="10" fill="#999" />
                    <Span
                      display="inline-block"
                      marginLeft="2px"
                      verticalAlign="top"
                    >
                      {item.listItemAdditionalInfo.grade} (
                      {item.listItemAdditionalInfo.archiveCount})
                    </Span>
                  </Box>
                ) : (
                  ''
                )}
              </FlexBox>
            </Box>
          </Box>
        );
      })} */}
    </>
  );
}
