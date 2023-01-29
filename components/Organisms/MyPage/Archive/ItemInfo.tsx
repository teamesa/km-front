import { Photo } from 'assets/mypage';
import { FlexBox, Span, Tag } from 'components/Atoms';
import { PresentationBadge } from 'states/myArchiveList';
import theme from 'styles/theme';

export default function ItemInfo({
  typeBadge,
  updatedAt,
  isMultiImages,
}: {
  typeBadge: PresentationBadge;
  updatedAt: string;
  isMultiImages: boolean;
}) {
  return (
    <FlexBox justifyContent="space-between">
      <FlexBox fontSize="11px" alignItems="center">
        <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
          {typeBadge?.text}
        </Tag>
        <Span marginLeft="5px" color={theme.colors.gray99}>
          {updatedAt}
        </Span>
      </FlexBox>
      <Photo
        width="20px"
        height="16px"
        visibility={isMultiImages ? 'visible' : 'hidden'}
      />
    </FlexBox>
  );
}
