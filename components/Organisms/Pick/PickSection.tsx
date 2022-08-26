import { useRecoilValue } from 'recoil';

import PickItem from 'components/Organisms/Pick/PickCard';
import { PickState } from 'states';

export default function PickSection() {
  const data = useRecoilValue(PickState);

  return (
    <>
      {data.contents.map((content, index) => (
        <PickItem key={content.id ?? index} content={content}></PickItem>
      ))}
    </>
  );
}
