import ListWish from 'assets/list/ListWish';
import StarRating from 'assets/list/StarRating';
import { Box, FlexBox } from 'components/Atoms';
import { PresentationlistItemAdditionalInfo } from 'states/list';
import theme from 'styles/theme';
interface AdditionalInfoProps {
  listItemAdditionalInfo: PresentationlistItemAdditionalInfo;
  marginTop?: number;
}
export default function ItemAdditionalInfo(props: AdditionalInfoProps) {
  const listItemAdditionalInfo = props.listItemAdditionalInfo;
  const marginTop = props.marginTop;
  return (
    <>
      <FlexBox marginTop={`${marginTop ?? 15}px`}>
        {listItemAdditionalInfo.heartCount ? (
          <FlexBox alignItems="center" marginRight="10px" height="12px">
            <ListWish
              width="10px"
              height="9px"
              viewBox="0 0 10 9"
              fill={theme.colors.gray99}
            />
            <Box
              marginLeft="2px"
              color={theme.colors.gray99}
              fontSize="9px"
              lineHeight="12px"
            >
              {listItemAdditionalInfo.heartCount}
            </Box>
          </FlexBox>
        ) : (
          ''
        )}
        {listItemAdditionalInfo.grade ? (
          <FlexBox marginRight="10px" height="12px">
            <StarRating
              width="10px"
              height="10px"
              viewBox="0 0 10 10"
              fill={theme.colors.gray99}
            />
            <Box
              marginLeft="2px"
              color={theme.colors.gray99}
              fontSize="9px"
              lineHeight="12px"
            >
              {listItemAdditionalInfo.grade} (
              {listItemAdditionalInfo.archiveCount})
            </Box>
          </FlexBox>
        ) : (
          ''
        )}
      </FlexBox>
    </>
  );
}
