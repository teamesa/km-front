import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import NoItemList from 'components/Organisms/List/NoItemList';
import { ListState } from 'states';

export default function ListSection() {
  const data = useRecoilValueLoadable(ListState);
  const listData = useRecoilValue(ListState);

  if (listData.contents.length === 0) {
    return <NoItemList />;
  }

  switch (data.state) {
    case 'hasValue':
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
