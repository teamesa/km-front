import { useRecoilValueLoadable } from 'recoil';

import ListCard from './ArchiveListCard';
import BlankArchiveListSection from './BlankArchiveListSection';

import { Box } from 'components/Atoms';
import { ListState, MyArchiveListState } from 'states';

export default function ArchiveListSection() {
  const data = useRecoilValueLoadable(MyArchiveListState);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0) {
        return <BlankArchiveListSection />;
      }

      return (
        <>
          <Box marginBottom="60px">
            {data.contents.contents.map((content, index) => (
              <ListCard key={content?.id ?? index} content={content} />
            ))}
          </Box>
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
}
