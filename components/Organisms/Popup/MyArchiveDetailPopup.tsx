import { css } from '@emotion/react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import StarRating from 'assets/list/StarRating';
import { Pointer, CloseBtn } from 'assets/mypage';
import { Box, Button, FlexBox, Span, Tag } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import theme from 'styles/theme';

const MyArchiveDetailPopup = () => {
  const setPopupName = useSetRecoilState(PopupNameState);

  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

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
                  전시회
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
              이건희 특별전 : 어느 수집가의 초대 이건희 특별전 : 어느 수집가의
              초대 이건희 특별전 : 어느 수집가의 초대
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
            <Box margin="0 10px">
              사용자가 작성한 코멘트 영역이 뿌려집니다 그냥 인스타하는 사람들을
              위한 전시같은 느낌 물론 전시를 보는건 즐거웠음 하지만 사람들
              사진찍느라 앞으로 나아가질않음…ㅠㅠㅠ 웨이팅도 평일 2시에 갔을때
              1시간정도 웨이팅했움요 굿즈는 몇몇 품절된거있었음요 사용자가
              작성한 코멘트 영역이 뿌려집니다 사용자가 작성한 코멘트 영역이
              뿌려집니다 그냥 인스타하는 사람들을 위한 전시같은 느낌 물론 전시를
              보는건 즐거웠음 하지만 사람들 사진찍느라 앞으로
              나아가질않음…ㅠㅠㅠ 웨이팅도 평일 2시에 갔을때 1시간정도
              웨이팅했움요 굿즈는 몇몇 품절된거있었음요 사용자가 작성한 코멘트
              영역이 뿌려집니다
            </Box>
          </Box>
          <FlexBox borderTop="solid 1px" borderTopColor={theme.colors.gray99}>
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
                  소문난 감자탕 소문난 감자탕 소문난 감자탕
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
                  성수다락
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
};

export default MyArchiveDetailPopup;
