import { useRecoilValue } from 'recoil';

import { FlexBox } from 'components/Atoms';
import PickSection from 'components/Organisms/Pick/PickSection';
import PickTitle from 'components/Organisms/Pick/PickTitle';

export default function MyPickPage() {
  return (
    <>
      <PickTitle />
      <FlexBox
        padding="0px 12.5px !important"
        flexWrap="wrap"
        marginBottom="120px"
      >
        <PickSection />
      </FlexBox>
    </>
  );
}
