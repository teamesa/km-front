import Image from 'next/image';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import ListWish from 'assets/list/ListWish';
import StarRating from 'assets/list/StarRating';
import { Box, Button, FlexBox, Tag, Span } from 'components/Atoms';
import theme from 'styles/theme';

출처: https: interface ItemProps {
  image: string;
  type: string;
  day?: number;
  pay: string;
  name: string;
  like?: number;
  rate?: number;
}

export default function Item({
  image,
  type,
  day,
  pay,
  name,
  like,
  rate,
}: ItemProps) {
  return (
    <Box margin="0px 0px 40px">
      <Box margin="0px -15px">
        <Image
          src={image}
          alt="image"
          width="375"
          height="250"
          layout="responsive"
        />
      </Box>
      <Box position="relative">
        <Box margin="14px 0px 10px">
          <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
            {type}
          </Tag>
          {day ? (
            <Tag backgroundColor="#eee" color={theme.colors.black}>
              D-{day}
            </Tag>
          ) : null}
          <Tag backgroundColor="#eee" color={theme.colors.black}>
            {pay}
          </Tag>
        </Box>
        <Button position="absolute" right="0px" top="0px">
          <NavWish width="17" height="16" />
        </Button>
        <Box
          margin="0px 0px 12px"
          fontSize="15px"
          lineHeight="18px"
          fontWeight="500"
        >
          {name}
        </Box>
        <FlexBox>
          {like ? (
            <Box fontSize="9px" lineHeight="12px">
              <ListWish width="10" height="9" fill="#999" />
              <Span display="inline-block" marginLeft="2px" verticalAlign="top">
                {like}
              </Span>
            </Box>
          ) : null}
          {rate ? (
            <Box marginLeft="10px" fontSize="9px" lineHeight="12px">
              <StarRating width="10" height="10" fill="#999" />
              <Span display="inline-block" marginLeft="2px" verticalAlign="top">
                {rate}
              </Span>
            </Box>
          ) : null}
        </FlexBox>
      </Box>
    </Box>
  );
}
