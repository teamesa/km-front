import { useRecoilValueLoadable } from 'recoil';
import ListCard from './ListCard';
import { Box } from 'components/Atoms';
import BlankArchiveListSection from './BlankArchiveListSection';
import myArchiveList from 'states/myArchiveList';

export default function ListSection() {
  const data = useRecoilValueLoadable(myArchiveList);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0) {
        return <BlankArchiveListSection />;
      }

      return (
        <>
          <Box>
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
