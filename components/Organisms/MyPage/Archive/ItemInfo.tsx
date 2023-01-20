import { Photo } from 'assets/mypage';
import { FlexBox, Span, Tag } from 'components/Atoms';
import { PresentationBadge } from 'states/myArchiveList';
import theme from 'styles/theme';

type InfoProps = {
  typeBadge: PresentationBadge;
  presentationTitle: string;
  updatedAt: string;
  isMultiImages: boolean;
};

export default function ItemInfo(props: InfoProps) {
  const typeBadge = props.typeBadge;
  const updatedAt = props.updatedAt;
  const isMultiImages = props.isMultiImages;

  return (
    <FlexBox justifyContent="space-between">
      <FlexBox fontSize="11px" alignItems="center">
        <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
          {typeBadge.text}
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
