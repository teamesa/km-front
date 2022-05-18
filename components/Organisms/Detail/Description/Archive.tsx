import { css } from '@emotion/react';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Box, Span, FlexBox, Tag } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import theme from 'styles/theme';

interface ArchiveProps {
  data: {
    title: string;
    star: number;
    description: string;
  }[];
}
export default function Archive({ data }: ArchiveProps) {
  return (
    <Box color={theme.colors.black} fontSize="14px" padding="0 15px">
      {data.map((item, index) => (
        <Box key={index} paddingTop="24px">
          <FlexBox>
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
            <Box marginTop="13px" flex="0 0 auto">
              <Tag
                color={theme.colors.lime}
                background={theme.colors.black}
                boxShadow="0 0 8px 0 rgba(0, 0, 0, 0.08)"
              >
                <Span
                  display="inline-block"
                  fontSize="0"
                  css={css`
                    vertical-align: text-top;
                  `}
                >
                  <NavWish
                    fill={theme.colors.lime}
                    width="18px"
                    height="18px"
                  />
                </Span>
                25
              </Tag>
            </Box>
          </FlexBox>
          <Box
            fontSize="13px"
            lineHeight="1.54"
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
  );
}
