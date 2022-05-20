import { useRecoilValue } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import { ListState } from 'states';

export default function ListSection() {
  const data = useRecoilValue(ListState);

  return (
    <>
      {data.map((list, index) => (
        <ListCard key={index} data={data[index].content} />
      ))}
    </>
  );
}
