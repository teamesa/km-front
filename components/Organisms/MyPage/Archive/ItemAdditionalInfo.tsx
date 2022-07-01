import { Pointer, Profile } from 'assets/mypage';
import { FlexBox, Span } from 'components/Atoms';

export default function ItemAdditionalInfo() {
  return (
    <FlexBox>
      <Pointer width="11px" height="15px" />
      <Span marginLeft="10px" fontSize="12px" lineHeight="18px">
        성수다락, 대림창고
      </Span>
    </FlexBox>
  );
}
