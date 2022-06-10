import { useRecoilValue } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import { FilterState, ListState } from 'states';

export default function ListSection() {
  const initialList = useRecoilValue(ListState);
  const filterList = useRecoilValue(FilterState);

  // 1. initialList === filterList.length => initialList
  // 1-1 initialList도 0 => 아무것도 등록이 안된경우
  // 1-2 initialList데이터가 있는 경우 =>ListCard

  // 2. filter를 한 경우 -> filterList를 보여줌
  // 2-1.filterList가 아무것도 없는경우]
  // 2-2 filterList가 있는 경우-> ListCard > map을 fil

  // 리팩토링
  // 함수 하나를 만들기 => ListCard를 보여주는 것

  return (
    <>
      {console.log('initialList', initialList)}
      {console.log('filterList', filterList)}
      {/* {data.contents.map((content) => (
        <ListCard key={content.id} content={content} />
      ))} */}
    </>
  );
}
