import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
} from 'recoil';

import PickItem from 'components/Organisms/Pick/PickCard';
import { PickState } from 'states';

export default function PickSection() {
  const router = useRouter();
  const resetPick = useResetRecoilState(PickState);
  const data = useRecoilValueLoadable(PickState);
  const test = useRecoilValue(PickState);

  useEffect(() => {
    resetPick();
    console.log(test);
  }, [resetPick, router.pathname, test]);

  switch (data.state) {
    case 'hasValue':
      return (
        <>
          {data.contents.contents.map((content, index) => (
            <PickItem key={content?.id ?? index} content={content} />
          ))}
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
}
