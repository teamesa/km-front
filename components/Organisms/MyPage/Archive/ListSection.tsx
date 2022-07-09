import { useRecoilValueLoadable } from 'recoil';
import ListCard from './ListCard';
import { Box, Button } from 'components/Atoms';
import { ListState } from 'states';
import theme from 'styles/theme';

export default function ListSection() {
  const data = useRecoilValueLoadable(ListState);

  switch (data.state) {
    case 'hasValue':
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
