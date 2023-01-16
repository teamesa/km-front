import ListCard from './ListCard';

import { Box } from 'components/Atoms';
import { MyArchivePageContents } from 'states/myArchiveList';

export default function ListSection(data: any) {
  return (
    <Box
      paddingBottom="120px"
      marginBottom="var(--platformBottomArea)"
      paddingTop="20px"
    >
      {data?.contents?.contents?.map(
        (content: MyArchivePageContents, index: number) => (
          <ListCard content={content} key={index} />
        ),
      )}
    </Box>
  );
}
