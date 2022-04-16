import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Box, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import useRefUtils from 'utils/hooks/useRefUtils';

interface BottomTabItemProps {
  icon: JSX.Element;
  selectedIcon: JSX.Element;
  path?: string[];
}

function BottomTabItem({ data }: { data: BottomTabItemProps }) {
  const router = useRouter();
  const isSelected = data.path?.some((path) => router.pathname === path);

  return (
    <FlexBox
      role="tab"
      flex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      onClick={() => router.push(data.path?.[0] ?? '')}
    >
      <Box width="30px" height="30px" marginBottom="6px">
        {isSelected ? data.selectedIcon : data.icon}
      </Box>
    </FlexBox>
  );
}

export default function BottomTabNavigator({
  data,
}: {
  data: BottomTabItemProps[];
}) {
  const router = useRouter();
  const isShow = data.some((item) => {
    return item.path?.some((path) => router.pathname === path);
  });
  const { ref, height } = useRefUtils();

  if (isShow)
    return (
      <>
        <Box
          zIndex={Z_INDEX.SKY}
          backgroundColor="white"
          bottom="0px"
          width="100%"
          position="fixed"
          ref={ref}
        >
          <FlexBox
            aria-label="하단 탭"
            role="tablist"
            boxShadow="0 -7px 10px 0 rgba(0, 0, 0, 0.08);"
            height="90px"
          >
            {data.map((item, index) => (
              <BottomTabItem data={item} key={index} />
            ))}
          </FlexBox>
          <Box width="100%" height="var(--platformBottomArea)" />
        </Box>
      </>
    );

  return <></>;
}
