import { useRecoilValueLoadable } from 'recoil';

import NoPickList from 'components/Organisms/Pick/NoPickList';
import PickItem from 'components/Organisms/Pick/PickCard';
import { pickState } from 'states/pick';

export default function PickSection() {
  const data = useRecoilValueLoadable(pickState);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0) {
        return <NoPickList />;
      } else {
        return (
          <>
            {data.contents.contents.map((content, index) => (
              <PickItem key={content?.id ?? index} content={content} />
            ))}
          </>
        );
      }
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
}
