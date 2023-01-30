import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';

import { Box } from 'components/Atoms';
import HomeListCard from 'components/Organisms/HomeList/HomeListCard';
import { homeListState, useResetSwipeItemListFunction } from 'states/home';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function HomeList() {
  const router = useRouter();
  const resetHomeList = useResetSwipeItemListFunction();
  const homeListInfo = useRecoilValueLoadable(homeListState);
  useInitHeader({
    headerLeft: 'allShow',
    headerRight: 'close',
    headerRightAction: () => router.back(),
  });

  useEffect(() => {
    resetHomeList();
  }, []);

  switch (homeListInfo.state) {
    case 'hasValue':
      return (
        <Box borderTop="1px solid #f3f3f3">
          {homeListInfo?.contents?.data?.keyVisualDatas?.map(
            ({ keyVisualPhotoUrl, upperTitle, lowerTitle }, index) => (
              <HomeListCard
                photoUrl={keyVisualPhotoUrl}
                upperTitle={upperTitle}
                lowerTitle={lowerTitle}
                key={`HomeListCard-${index}`}
              />
            ),
          )}
        </Box>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw homeListInfo.contents;
  }
}
