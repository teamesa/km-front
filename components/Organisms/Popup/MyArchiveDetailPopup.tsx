import { css } from '@emotion/react';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { CloseBtn } from 'assets/mypage';
import { Box, Button, FlexBox } from 'components/Atoms';
import { Loader } from 'components/Atoms/Loader';
import Carousel from 'components/Molecules/Carousel';
import InnerHTML from 'components/Molecules/InnerHTML';
import NoItemBox from 'components/Molecules/NoItemBox';
import Popup from 'components/Molecules/Popup';
import MyArchiveDetailHeaderInfo from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCardHeader';
import MyArchiveDetailCardInfo from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCardInfo';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import {
  MyArchiveDetailProps,
  ClickedArchiveDetailUrl,
} from 'states/myArchiveDetail';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

const MyArchiveDetailPopup = () => {
  const setPopupName = useSetRecoilState(PopupNameState);
  const [url, setUrl] = useRecoilState(ClickedArchiveDetailUrl);
  const [archiveData, setArchiveData] = useState<MyArchiveDetailProps>();

  const getArchiveDetailData = async (url: string) => {
    const axios = customAxios();
    const { data } = (await axios({
      url: url,
      method: 'GET',
    })) as AxiosResponse<MyArchiveDetailProps>;
    setArchiveData(data);
  };

  useEffect(() => {
    getArchiveDetailData(url);
  }, [url]);

  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

  if (archiveData) {
    return (
      <Popup>
        <Box>
          <Button onClick={handleClosePopup} marginLeft="172.5px">
            <CloseBtn />
          </Button>
          <Box background={theme.colors.white} width="345px" margin="15px">
            <MyArchiveDetailHeaderInfo
              title={archiveData?.item?.title}
              updatedAt={archiveData?.updatedAt}
              typeBadge={archiveData?.item?.typeBadge}
              archiveActionButton={archiveData?.archiveActionButton}
            />
            <Box position="relative">
              <Box
                width="345px"
                height="345px"
                borderTop={`1px solid ${theme.colors.gray99}`}
              >
                {archiveData?.photoUrls?.length === 0 ? (
                  <NoItemBox
                    width="inherit"
                    height="335px"
                    text="사진"
                    textColor={theme.colors.gray77}
                    backgroundColor={theme.colors.grayF2}
                  />
                ) : (
                  <Carousel
                    imgUrlArr={archiveData?.photoUrls}
                    width={'345px'}
                    height={'345px'}
                  />
                )}
              </Box>
              <FlexBox
                width="100%"
                height="118px"
                position="absolute"
                bottom="10px"
                justifyContent="center"
                alignItems="center"
              >
                {/* dim */}
                <Box
                  position="absolute"
                  width="325px"
                  height="118px"
                  backgroundColor={theme.colors.black}
                  opacity={0.4}
                />
                <Box
                  width="305px"
                  height="88px"
                  marginRight="15px"
                  marginLeft="25px"
                  overflowY="auto"
                  lineHeight="18px"
                  zIndex="1000"
                  css={css`
                    ::-webkit-scrollbar {
                      display: block;
                      width: 2px;
                      height: 100%;
                      background: gray;
                    }
                    ::-webkit-scrollbar-thumb {
                      background: white;
                    }
                  `}
                >
                  {archiveData?.comment === '' ? (
                    <NoItemBox
                      width="inherit"
                      height="inherit"
                      text="코멘트"
                      textColor={theme.colors.white}
                    />
                  ) : (
                    <Box
                      width="305px"
                      maxHeight="118px"
                      paddingRight="15px"
                      fontSize="12px"
                      textAlign="left"
                      color={theme.colors.white}
                    >
                      <InnerHTML data={archiveData?.comment} />
                    </Box>
                  )}
                </Box>
              </FlexBox>
            </Box>
            <MyArchiveDetailCardInfo
              starRating={archiveData?.starRating}
              food={archiveData?.food}
              cafe={archiveData?.cafe}
            />
          </Box>
        </Box>
      </Popup>
    );
  } else {
    return (
      <Popup>
        <Box>
          <Button onClick={handleClosePopup} marginLeft="172.5px">
            <CloseBtn />
          </Button>
          <FlexBox
            background={theme.colors.white}
            width="345px"
            height="652px"
            margin="15px"
            justifyContent="center"
            alignItems="center"
          >
            {/* TODO: 데이터로딩시간에 따른 로딩화면 덜그럭거림 해결하기 */}
            <Loader />
          </FlexBox>
        </Box>
      </Popup>
    );
  }
};

export default MyArchiveDetailPopup;
