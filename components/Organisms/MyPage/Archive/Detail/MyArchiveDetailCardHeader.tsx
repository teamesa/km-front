import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { Box, Button, FlexBox, Span, Tag } from 'components/Atoms';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import { MyArchiveDetailHeaderInfoProps } from 'states/myArchiveDetail';
import theme from 'styles/theme';

export default function MyArchiveDetailHeaderInfo(
  props: MyArchiveDetailHeaderInfoProps,
) {
  const router = useRouter();
  const setPopupName = useSetRecoilState(PopupNameState);
  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };
  const handleUpdateButton = () => {
    handleClosePopup();
    router.push('/list');
  };

  return (
    <Box height="99px" padding="20px 15px">
      <FlexBox justifyContent="space-between">
        <Box fontSize="11px" display="flex" alignItems="center">
          <Tag
            backgroundColor={theme.colors.white}
            color={theme.colors.black}
            border="1px solid"
          >
            {props.typeBadge.text}
          </Tag>
          <Span marginLeft="5px" color={theme.colors.gray99}>
            {props.updatedAt}
          </Span>
        </Box>
        <Box>
          <Button
            fontSize="12px"
            lineHeight="16px"
            color={theme.colors.gray77}
            marginRight="16px"
            borderBottom="1px solid"
            borderBottomColor={theme.colors.gray77}
            onClick={() => {
              handleUpdateButton();
            }}
          >
            수정
          </Button>
          <Button
            fontSize="12px"
            lineHeight="16px"
            color={theme.colors.gray77}
            borderBottom="1px solid"
            borderBottomColor={theme.colors.gray77}
          >
            삭제
          </Button>
        </Box>
      </FlexBox>
      <Box
        fontSize="15px"
        marginTop="20px"
        lineHeight="22px"
        fontWeight="Bold"
        overflow="hidden"
        display="-webkit-box"
        css={css`
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        `}
      >
        {props.title}
      </Box>
    </Box>
  );
}
