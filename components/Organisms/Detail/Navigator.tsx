import { useState, useEffect } from 'react';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import Share from 'assets/detail/Share';
import { Box, Button, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import theme from 'styles/theme';

export default function Navigator() {
  const [currentUrl, setCurrentUrl] = useState('');

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
            241
          </Box>
          <Button
            marginLeft="20px"
            marginTop="5px"
            onClick={() => {
              navigator.clipboard.writeText(currentUrl);
              alert('클립보드에 복사되었습니다.');
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
        >
          아카이브 기록하기
        </Button>
      </FlexBox>
    </Box>
  );
}
