import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Box, Button, FlexBox } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';
import { headerState } from 'states/common';
import theme from 'styles/theme';
import useRefUtils from 'utils/hooks/useRefUtils';

interface BottomTabItemProps {
  icon: JSX.Element;
  selectedIcon: JSX.Element;
  pathName: string;
  path: string[];
}

function BottomTabItem({ data }: { data: BottomTabItemProps }) {
  const router = useRouter();
  const isSelected = data.path?.some((path) => router.pathname === path);

  return (
    <Box
      flex={1}
      textAlign="center"
      onClick={() => router.push(data.path?.[0] ?? '')}
    >
      <Button role="tab">
        <FlexBox flexDirection="column">
          <Box marginBottom="2px">
            {isSelected ? data.selectedIcon : data.icon}
          </Box>
          <Box fontSize="9px">
            {isSelected ? (
              <Box fontWeight={500}>{data.pathName}</Box>
            ) : (
              data.pathName
            )}
          </Box>
        </FlexBox>
      </Button>
    </Box>
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
  const { ref } = useRefUtils();
  const isSearchType = useRecoilValue(headerState);

  // search 페이지 에서도 하단 바 노출
  if (isShow || isSearchType.isSearchType)
    return (
      <>
        <Box
          zIndex={Z_INDEX.SKY}
          backgroundColor="#f8f8f8"
          bottom="0px"
          width="100%"
          maxWidth={theme.view.webView}
          position="fixed"
          ref={ref}
        >
          <FlexBox
            boxShadow="0 -7px 10px 0 rgba(0, 0, 0, 0.08);"
            height="60px"
            padding="8px 0"
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
