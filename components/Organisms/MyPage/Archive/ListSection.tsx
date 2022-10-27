import { Loadable, useRecoilValueLoadable } from 'recoil';

import BlankArchiveListSection from './BlankArchiveListSection';
import ListCard from './ListCard';

import { Box } from 'components/Atoms';
import { myArchiveListState, TPostList } from 'states/myArchiveList';
import { MyArchivePageContents } from 'states/myArchiveList';

export default function ListSection(data: any) {
  return (
    <>
      <Box marginBottom="60px">
        {data?.contents?.contents?.map(
          (content: MyArchivePageContents, index: number) => (
            <ListCard key={content?.api ?? index} content={content} />
          ),
        )}
      </Box>
    </>
  );
}
