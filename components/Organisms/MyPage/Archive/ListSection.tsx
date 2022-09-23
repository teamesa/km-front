import { useRecoilValueLoadable } from 'recoil';

import BlankArchiveListSection from './BlankArchiveListSection';
import ListCard from './ListCard';

import { Box } from 'components/Atoms';
import { MyArchiveListState } from 'states';

export default function ListSection() {
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
              <ListCard key={content?.api ?? index} content={content} />
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
