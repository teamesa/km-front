import ListCard from './ListCard';

import { Box } from 'components/Atoms';
import MyArchiveListFragment from 'components/Organisms/MyPage/Archive/MyArchiveListFragment';
import { MyArchivePageContents } from 'states/myArchiveList';

export default function ListSection(data: any) {
  if (data.contents.length === 0) {
    return <MyArchiveListFragment />;
  } else {
    return (
      <Box paddingBottom="60px">
        {data?.contents?.contents?.map(
          (content: MyArchivePageContents, index: number) => (
            <ListCard key={content?.api ?? index} content={content} />
          ),
        )}
      </Box>
    );
  }
}
