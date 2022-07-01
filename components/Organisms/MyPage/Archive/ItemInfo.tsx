import { Photo } from 'assets/mypage';
import { Box, FlexBox, Span, Tag } from 'components/Atoms';
import type { PresentationBadge, PresentationTitle } from 'states/list';
import theme from 'styles/theme';

type InfoProps = {
  typeBadge: PresentationBadge;
  presentationTitle: PresentationTitle;
  // presentationDate: PresentationDate;
  // isMultiImages: IsMultiImages;
};

export default function ItemInfo(props: InfoProps) {
  const typeBadge = props.typeBadge;

  return (
    <FlexBox justifyContent="space-between">
      <Box fontSize="11px">
        <Tag backgroundColor={theme.colors.black} color={theme.colors.lime}>
          {typeBadge.text}
        </Tag>
        <Span marginLeft="10px" color={theme.colors.gray99}>
          2022.04.02
        </Span>
      </Box>
      <Photo width="20px" height="16px" />
    </FlexBox>
  );
}
