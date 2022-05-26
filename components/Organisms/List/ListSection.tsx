import { useRecoilValue } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import { ListState } from 'states';

export default function ListSection() {
  const data = useRecoilValue(ListState);

  return (
    <>
      {/* {data.contents.map((list, index) => (
        <ListCard
          key={index}
          contents={list}
          responsePagingStatus={{
            nextPage: 0,
            currentPage: 0,
            pageSize: 0,
            hasNext: false,
            totalContentsCount: 0,
            currentContentsCount: 0,
          }}
        />
      ))} */}
    </>
  );
}
