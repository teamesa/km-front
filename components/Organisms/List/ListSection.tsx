import { useRecoilValue } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import NoItemList from 'components/Organisms/List/NoItemList';
import { ListState } from 'states';

export default function ListSection() {
  const data = useRecoilValue(ListState);
  return (
    <>
      {data.contents.map((content, index) => (
        <ListCard key={content.id ?? index} content={content} />
      ))}
    </>
  );
}
