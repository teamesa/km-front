import { useRecoilValue } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import { ListState } from 'states';

export default function ListSection() {
  const data = useRecoilValue(ListState);

  return (
    <>
      {data.contents.map((content) => (
        <ListCard key={content.id} content={content} />
      ))}
    </>
  );
}
