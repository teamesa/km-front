import { RefObject } from 'react';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Box, FlexBox, Span, Tag } from 'components/Atoms';
import theme from 'styles/theme';

interface ArchiveProps {
  scrollRef: RefObject<HTMLDivElement>;
  data: {
    title: string;
    star: number;
    description: string;
  }[];
}

export default function Archive({ data, scrollRef }: ArchiveProps) {
  if (data.length === 0) {
    return <Box> 아카이브 없다</Box>;
  }
  return (
    <Box color={theme.colors.black} fontSize="14px" paddingTop="40px">
      <Box fontSize="17px" fontWeight="500">
        아카이브
      </Box>
      <Box ref={scrollRef}>
        {data.map((item, index) => (
          <Box key={index} paddingTop="24px">
            <FlexBox alignItems="center">
              <Box
                flex="0 0 50px"
                height="50px"
                backgroundColor={theme.colors.gray99}
                borderRadius="100%"
              />
              <Box padding="8px 10px" flex="1 1 100%">
                {item.title}
                <FlexBox alignItems="center">
                  <Box>별다섯개</Box>
                  <Box paddingLeft="9px" paddingRight="11px">
                    |
                  </Box>
                  <Box color={theme.colors.gray99} fontSize="11px">
                    2022.04.02
                  </Box>
                </FlexBox>
              </Box>
              <Box flex="0 0 50px " height="20px">
                <Tag
                  display="flex !important"
                  alignItems="center"
                  padding="0px 10px !important"
                  margin="0px !important"
                  color={theme.colors.lime}
                  background={theme.colors.black}
                  boxShadow="0 0 8px 0 rgba(0, 0, 0, 0.08)"
                >
                  <NavWish
                    fill={theme.colors.lime}
                    width="13px"
                    height="12px"
                    viewBox="3 4 23 22"
                  />
                  <Span marginLeft="4px">25</Span>
                </Tag>
              </Box>
            </FlexBox>
            <Box
              fontSize="13px"
              lineHeight="20px"
              textAlign="left"
              marginTop="20px"
            >
              {item.description}
            </Box>
            <Box
              backgroundColor={theme.colors.grayF8}
              padding="20px 15px"
              fontSize="12px"
              marginTop="12px"
            >
              <Box>다녀온 맛집 : 성수다락</Box>
              <Box paddingTop="10px"> 다녀온 카페 : 대림창고</Box>
            </Box>
            <Box
              marginTop="24px"
              height="1px"
              backgroundColor={theme.colors.grayEE}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
