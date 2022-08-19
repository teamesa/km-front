import { useRouter } from 'next/router';
import { useRecoilValueLoadable } from 'recoil';
import useCopy from 'use-copy';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import Share from 'assets/detail/Share';
import { Box, Button, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { DetailState } from 'states';
import { TGetSummary } from 'states/detail';
import theme from 'styles/theme';

export default function Navigator() {
  const router = useRouter();
  const { id } = router.query;
  const state = useRecoilValueLoadable(DetailState(Number(id)));
  const data: TGetSummary = state?.contents?.summary;
  const [_, copy, setCopied] = useCopy(`${window.location.href}`);

  const handle = () => {
    if (navigator.share) {
      navigator.share({
        title: '공유하기',
        text: '전시회 공유하기',
        url: `${window.location.href}`,
      });
    } else {
      copy();
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
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
          <Box marginLeft="20px" marginTop="5px" onClick={handle}>
            <Share />
          </Box>
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
