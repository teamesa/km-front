import { useRecoilValueLoadable } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import NoItemList from 'components/Organisms/List/NoItemList';
import { ListState } from 'states';

export default function ListSection() {
  const data = useRecoilValueLoadable(ListState);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0) {
        return <NoItemList />;
      }

      return (
        <>
          {data.contents.contents.map((content, index) => (
            <ListCard key={content?.id ?? index} content={content} />
          ))}
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
}
