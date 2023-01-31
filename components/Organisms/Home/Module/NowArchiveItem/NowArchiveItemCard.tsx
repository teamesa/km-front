import Image from 'next/image';

import { Pointer, Profile } from 'assets/mypage';
import { Box, FlexBox, Span } from 'components/Atoms';
import ArchiveHeart from 'components/Organisms/Detail/Description/ArchiveHeart';
import theme from 'styles/theme';

export default function NowArchiveItemCard() {
  const heart = {
    heartClicked: false,
    link: '',
  };

  return (
    <Box width="345px" height="fit-contents" marginBottom="10px">
      <Box width="345px" height="345px" position="relative">
        <Image
          src={
            'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
          }
          alt="image"
          layout="fill"
        />
        <FlexBox
          position="absolute"
          bottom="0"
          width="100%"
          height="60px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            height="60px"
            backgroundColor={theme.colors.white}
            opacity={0.3}
          />
          <FlexBox alignItems="center" zIndex={10}>
            <Profile width="45px" height="45px" />
            <FlexBox marginLeft="12px">
              <Box>
                <Box fontSize="13px" fontWeight="Bold">
                  소란스러운 고흐
                </Box>
                <FlexBox>
                  <Box fontSize="11px">⭐⭐⭐⭐⭐</Box>
                  <Box margin=" 0 10px">|</Box>
                  <Box>2022.04.02</Box>
                </FlexBox>
              </Box>
            </FlexBox>
          </FlexBox>
          <Box zIndex={10}>
            <ArchiveHeart heart={heart} heartCount={25} />
          </Box>
        </FlexBox>
      </Box>
      <Box>
        <Box
          marginTop="20px"
          marginBottom="6px"
          fontSize="15px"
          lineHeight="22px"
          fontWeight="Bold"
        >
          2021 서울재즈페스티벌
        </Box>
        <Box fontSize="13px" lineHeight="18px" color={theme.colors.gray77}>
          샵빱 뚜비두밥 샤바 두비두비두비두밥~
          사바두비두비두비두비바랍#$^@Q#$두밥
        </Box>
        <FlexBox marginTop="10px" alignItems="center">
          <Pointer width="11px" height="15px" />
          <Span
            marginLeft="10px"
            fontSize="12px"
            lineHeight="18px"
            color={theme.colors.gray77}
          >
            성수다락, 대림창고
          </Span>
        </FlexBox>
      </Box>
    </Box>
  );
}
