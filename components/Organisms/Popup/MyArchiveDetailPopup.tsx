import { css } from '@emotion/react';
import Image from 'next/image';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import StarRating from 'assets/list/StarRating';
import { Pointer, CloseBtn } from 'assets/mypage';
import { Box, Button, FlexBox, Span, Tag } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { MyArchiveDetailState } from 'states';
import { PopupNameState } from 'states';
import theme from 'styles/theme';

const MyArchiveDetailPopup = () => {
  const data = useRecoilValueLoadable(MyArchiveDetailState);
  const setPopupName = useSetRecoilState(PopupNameState);

  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };
  switch (data.state) {
    case 'hasValue':
      if (data.contents.length === 0) {
        return <Box>데이터 불러오기 실패</Box>;
      }

      return (
        <Popup>
          <Box>
            <Box marginLeft="172.5px">
              <Button onClick={handleClosePopup}>
                <CloseBtn />
              </Button>
            </Box>
            <Box background="#fff" width="345px" height="652px" margin="15px">
              <Box
                height="99px"
                padding="20px 15px"
                borderBottom="1px solid"
                borderBottomColor={theme.colors.gray77}
              >
                <FlexBox justifyContent="space-between">
                  <Box fontSize="11px" display="flex" alignItems="center">
                    <Tag
                      backgroundColor={theme.colors.white}
                      color={theme.colors.black}
                      border="1px solid"
                    >
                      {data.contents.typeBadge.text}
                    </Tag>
                    <Span marginLeft="5px" color={theme.colors.gray99}>
                      2022.07.29
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
                  {data.contents.title}
                </Box>
              </Box>
              <FlexBox width="345px" height="345px">
                <Image
                  src={
                    'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg'
                  }
                  alt="image"
                  width="345px"
                  height="345px"
                />
              </FlexBox>
              <Box
                height="88px"
                margin="20px 5px"
                overflowY="scroll"
                fontSize="12px"
                textAlign="left"
                lineHeight="18px"
                css={css`
                  ::-webkit-scrollbar {
                    display: block;
                    width: 2px;
                    height: 100%;
                    background: gray;
                  }
                  ::-webkit-scrollbar-thumb {
                    background: #000;
                  }
                `}
              >
                <Box margin="0 10px">{data.contents.comment}</Box>
              </Box>
              <FlexBox
                borderTop="solid 1px"
                borderTopColor={theme.colors.gray99}
              >
                <Box
                  width="172.5px"
                  height="80px"
                  background="#000"
                  padding="20px 15px"
                >
                  <FlexBox alignItems="center">
                    <Box>
                      <Pointer color="#fff" />
                    </Box>
                    <Span
                      marginLeft="10px"
                      fontSize="12px"
                      lineHeight="18px"
                      display="-webkit-box"
                      overflow="hidden"
                      color="#fff"
                      css={css`
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                      `}
                    >
                      {data.contents.food}
                    </Span>
                  </FlexBox>
                  <FlexBox alignItems="center">
                    <Box>
                      <Pointer color="#fff" />
                    </Box>
                    <Box
                      marginLeft="10px"
                      fontSize="12px"
                      lineHeight="18px"
                      overflow="hidden"
                      display="-webkit-box"
                      color="#fff"
                      css={css`
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                      `}
                    >
                      {data.contents.cafe}
                    </Box>
                  </FlexBox>
                </Box>
                <FlexBox
                  width="172.5px"
                  height="80px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StarRating
                    width="21.6px"
                    height="20.6px"
                    viewBox="0 0 10 10"
                    fill={theme.colors.orange}
                  />
                  <StarRating
                    width="21.6px"
                    height="20.6px"
                    viewBox="0 0 10 10"
                    fill={theme.colors.orange}
                  />
                  <StarRating
                    width="21.6px"
                    height="20.6px"
                    viewBox="0 0 10 10"
                    fill={theme.colors.orange}
                  />
                  <StarRating
                    width="21.6px"
                    height="20.6px"
                    viewBox="0 0 10 10"
                    fill={theme.colors.orange}
                  />
                  <StarRating
                    width="21.6px"
                    height="20.6px"
                    viewBox="0 0 10 10"
                    fill={theme.colors.orange}
                  />
                </FlexBox>
              </FlexBox>
            </Box>
          </Box>
        </Popup>
      );

    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
};
export default MyArchiveDetailPopup;
