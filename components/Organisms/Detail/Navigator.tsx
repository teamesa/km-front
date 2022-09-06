import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import Share from 'assets/detail/Share';
import { Box, Button, FlexBox } from 'components/Atoms';
import NavigatorHeart from 'components/Organisms/Detail/NavigatorHeart';
import { Z_INDEX } from 'constants/common';
import { DetailState } from 'states';
import { TGetSummary } from 'states/detail';
import theme from 'styles/theme';

export default function Navigator() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');
  const { id } = router.query;
  const { contents, state } = useRecoilValueLoadable(DetailState(Number(id)));
  const data: TGetSummary = contents?.summary;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  switch (state) {
    case 'hasValue':
      return (
        <Box
          zIndex={Z_INDEX.SKY}
          backgroundColor={theme.colors.black}
          width="100%"
          bottom="0px"
          position="fixed"
          padding="0 15px"
        >
          <FlexBox
            height="60px"
            alignItems="center"
            justifyContent="space-between"
          >
            <FlexBox>
              <Box>
                <NavigatorHeart
                  heart={data?.itemInfoAdditionalInfo?.heart}
                  heartCount={data?.itemInfoAdditionalInfo?.heartCount}
                />
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
                  pathname: data.itemInfoAdditionalInfo.archiveLink.link,
                  query: {
                    id: id,
                    title: data?.title,
                    thumbnailImageUrl: data?.listImageUrl,
                    checked: true,
                  },
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
              pathname: data?.itemInfoAdditionalInfo?.archiveLink.link,
              query: {
                id: id,
                title: data?.title,
                thumbnailImageUrl: data?.listImageUrl,
                checked: true,
              },
            });
          }}
        >
          {data?.itemInfoAdditionalInfo?.archiveLink.title}
        </Button>
      </FlexBox>
      <Box width="100%" height="var(--platformBottomArea)" />
    </Box>
  );
}
