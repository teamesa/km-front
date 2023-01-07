import { useEffect } from 'react';

import { FlexBox } from 'components/Atoms';
import PickSection from 'components/Organisms/Pick/PickSection';
import PickTitle from 'components/Organisms/Pick/PickTitle';
import { useResetPickStateFunction } from 'states/pick';

export default function MyPickPage() {
  const resetPickState = useResetPickStateFunction();

  useEffect(() => {
    resetPickState();
  }, [resetPickState]);

  return (
    <>
      <PickTitle />
      <FlexBox padding="0px 12.5px 120px !important" flexWrap="wrap">
        <PickSection />
      </FlexBox>
    </>
  );
}
