import Image from 'next/image';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Profile } from 'assets/mypage';
import { Box, FlexBox, Span, Tag } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import StarScope from 'components/Molecules/StarScope';
import { ArchiveContents } from 'states/detail';
import theme from 'styles/theme';
interface ArchiveProps {
  data: ArchiveContents;
}
export default function Archive({ data }: ArchiveProps) {
  if (data.archives.length === 0) {
    return <Box> 아카이브 없다</Box>;
  }

  return (
    <Box color={theme.colors.black} fontSize="22px" paddingTop="40px">
      <FlexBox alignItems="center">
        <StarScope
          currentStep={Math.round(data.avgStarRating)}
          width="21px"
          height="20px"
        />
        <Box paddingLeft="16px">{data.avgStarRating}</Box>
        <Box color={theme.colors.grayAA}>
          <Span color={theme.colors.grayBB} padding="0 5px">
            /
          </Span>
          5
        </Box>
      </FlexBox>
      {/* <Box
        height="1px"
        backgroundColor={theme.colors.grayEE}
        marginTop="23px"
      /> */}
      <Box paddingTop="24px">
        {data.archives.map((item, index) => (
          <Box key={index}>
            <Box
              height="1px"
              backgroundColor={theme.colors.grayEE}
              marginBottom="24px"
            />
            <FlexBox
              alignItems="center"
              justifyContent="space-between"
              marginBottom="24px"
            >
              <FlexBox>
                {item.userProfileUrl ? (
                  <Box
                    width="50px"
                    height="50px"
                    borderRadius="50%"
                    overflow="hidden"
                  >
                    <Image
                      src={item.userProfileUrl}
                      width="50px"
                      height="50px"
                      alt=""
                    />
                  </Box>
                ) : (
                  <Profile width="50px" height="50px" />
                )}
                <Box padding="8px 10px" fontSize="13px">
                  <Box color={theme.colors.black}>{item.userName}</Box>
                  <FlexBox alignItems="center">
                    <StarScope
                      currentStep={Math.round(item.starRating)}
                      width="10.5px"
                      height="10px"
                      margin="0 2.5px"
                    />
                    <Box padding="0 10px" color={theme.colors.grayEE}>
                      |
                    </Box>
                    <Box color={theme.colors.gray99} fontSize="11px">
                      {item.updatedAt}
                    </Box>
                  </FlexBox>
                </Box>
              </FlexBox>
              <Box height="20px">
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
            {item.photoUrls ? (
              <Box marginBottom="15px">
                {item.photoUrls.map((photo, index) => (
                  <Box key={index}>
                    <Image
                      src={photo}
                      width="345px"
                      height="345px"
                      alt=""
                      layout="intrinsic"
                    />
                  </Box>
                ))}
              </Box>
            ) : null}
            {item.comment ? (
              <Box
                fontSize="13px"
                lineHeight="1.54"
                textAlign="left"
                marginBottom="12px"
              >
                <InnerHTML data={item.comment} />
              </Box>
            ) : null}
            {item.cafe || item.food ? (
              <Box
                backgroundColor={theme.colors.grayF8}
                padding="20px 15px"
                fontSize="12px"
                marginBottom="24px"
              >
                {item.food ? <Box>다녀온 맛집 : {item.food}</Box> : null}
                {item.cafe ? (
                  <Box paddingTop={item.food ? '10px' : '0'}>
                    다녀온 카페 : {item.cafe}
                  </Box>
                ) : null}
              </Box>
            ) : null}
          </Box>
        ))}
      </Box>
      <Box width="100%" height="60px" />
      <Box width="100%" height="var(--platformBottomArea)" />
    </Box>
  );
}
