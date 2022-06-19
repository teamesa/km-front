import ListWish from 'assets/list/ListWish';
import StarRating from 'assets/list/StarRating';
import { Box, FlexBox, Span } from 'components/Atoms';
import { PresentationlistItemAdditionalInfo } from 'states/list';
import theme from 'styles/theme';
interface AdditionalInfoProps {
  listItemAdditionalInfo: PresentationlistItemAdditionalInfo;
}
export default function ItemAdditionalInfo(props: AdditionalInfoProps) {
  const listItemAdditionalInfo = props.listItemAdditionalInfo;
  return (
    <>
      <FlexBox>
        {listItemAdditionalInfo.heartCount ? (
          <Box fontSize="9px" lineHeight="12px">
            <ListWish width="10" height="9" fill={theme.colors.gray99} />
            <Span display="inline-block" marginLeft="2px" verticalAlign="top">
              {listItemAdditionalInfo.heartCount}
            </Span>
          </Box>
        ) : (
          ''
        )}
        {listItemAdditionalInfo.grade ? (
          <Box marginLeft="10px" fontSize="9px" lineHeight="12px">
            <StarRating width="10" height="10" fill="#999" />
            <Span display="inline-block" marginLeft="2px" verticalAlign="top">
              {listItemAdditionalInfo.grade} (
              {listItemAdditionalInfo.archiveCount})
            </Span>
          </Box>
        ) : (
          ''
        )}
      </FlexBox>
    </>
  );
}
