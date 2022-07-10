import { Photo } from 'assets/mypage';
import { Box, FlexBox, Span, Tag } from 'components/Atoms';
import { PresentationBadge, PresentationTitle } from 'states/myArchiveList';

import theme from 'styles/theme';

type InfoProps = {
  typeBadge: PresentationBadge;
  presentationTitle: PresentationTitle;
  updatedDate: string;
  isMultiImages: boolean;
};

export default function ItemInfo(props: InfoProps) {
  const typeBadge = props.typeBadge;
  const updatedDate = props.updatedDate;
  const isMultiImages = props.isMultiImages;

  return (
    <FlexBox justifyContent="space-between">
      <Box fontSize="11px">
        <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
          {typeBadge.text}
        </Tag>
        <Span marginLeft="10px" color={theme.colors.gray99}>
          {updatedDate}
        </Span>
      </Box>
      <Photo
        width="20px"
        height="16px"
        visibility={isMultiImages ? 'visible' : 'hidden'}
      />
    </FlexBox>
  );
}
