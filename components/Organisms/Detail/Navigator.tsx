import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import Share from 'assets/detail/Share';
import { Box, Button, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { DetailState } from 'states';
import { TGetSummary } from 'states/detail';
import theme from 'styles/theme';

export default function Navigator() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');

  const { id } = router.query;
  const state = useRecoilValueLoadable(DetailState(Number(id)));
  const data: TGetSummary = state?.contents?.summary;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <Box
      zIndex={Z_INDEX.SKY}
      backgroundColor={theme.colors.black}
      width="100%"
      bottom="0px"
      position="fixed"
      padding="0 15px"
    >
      <FlexBox height="60px" alignItems="center" justifyContent="space-between">
        <FlexBox>
          <Button marginTop="5px">
            <NavWish stroke={theme.colors.white} />
          </Button>
          <Box
            fontSize="10px"
            fontWeight={500}
            alignSelf="center"
            color={theme.colors.white}
            marginLeft="2px"
          >
            {data?.itemInfoAdditionalInfo?.heartCount}
          </Box>
          <Button
            marginLeft="20px"
            marginTop="5px"
            onClick={() => {
              navigator.clipboard
                .writeText(currentUrl)
                .then(() => {
                  alert('클립보드에 복사되었습니다.');
                })
                .catch(() => {
                  alert('주소복사에 실패했습니다');
                });
            }}
          >
            <Share />
          </Button>
        </FlexBox>
        <Button
          fontSize="16px"
          fontWeight={500}
          textAlign="left"
          color={theme.colors.lime}
          onClick={() => {
            router.push({
              pathname: '/archive',
              query: {
                id: id,
                title: data?.title,
                thumbnailImageUrl: data?.listImageUrl,
                checked: true,
              },
            });
          }}
        >
          아카이브 기록하기
        </Button>
      </FlexBox>
      <Box width="100%" height="var(--platformBottomArea)" />
    </Box>
  );
}
