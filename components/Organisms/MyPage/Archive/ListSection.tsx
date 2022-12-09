import ListCard from './ListCard';

import { Box } from 'components/Atoms';
import { MyArchivePageContents } from 'states/myArchiveList';

export default function ListSection(data: any) {
  return (
    <>
      <Box paddingBottom="60px">
        {data?.contents?.contents?.map(
          (content: MyArchivePageContents, index: number) => (
            <ListCard key={content?.api ?? index} content={content} />
          ),
        )}
      </Box>
    </>
  );
}
