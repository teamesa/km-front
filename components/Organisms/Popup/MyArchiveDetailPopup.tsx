import { css } from '@emotion/react';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

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
  ClickedItemId,
  ClickedArchiveId,
  MyArchiveDetailProps,
} from 'states/myArchiveDetail';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

const MyArchiveDetailPopup = () => {
  const setItemId = useSetRecoilState(ClickedItemId);
  const setPopupName = useSetRecoilState(PopupNameState);
  const archiveId = useRecoilValue(ClickedArchiveId);
  const [archiveData, setArchiveData] = useState<MyArchiveDetailProps>();

  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

  useEffect(() => {
    //TODO: api 분리
    async function getArchiveDetailData() {
      const axios = customAxios();
      const url = `/api/archive/detail/${archiveId}`;
      const axiosData = (await axios({
        url,
        method: 'GET',
      })) as AxiosResponse<MyArchiveDetailProps>;

      setArchiveData(axiosData.data);
      setItemId(axiosData.data.itemId.toString());
    }

    getArchiveDetailData();
  }, [archiveId, setItemId]);

  if (archiveData) {
    return (
      <Popup>
        <Box>
          <Button onClick={handleClosePopup} marginLeft="172.5px">
            <CloseBtn />
          </Button>
          <Box
            background={theme.colors.white}
            width="345px"
            height="652px"
            margin="15px"
          >
            <MyArchiveDetailHeaderInfo
              updatedAt={archiveData?.updatedAt}
              typeBadge={archiveData.typeBadge}
              title={archiveData.title}
              archiveAdditionalInfos={archiveData?.archiveAdditionalInfos}
            />
            <Box
              width="100%"
              height="347px"
              borderTop={`1px solid ${theme.colors.gray99}`}
              borderBottom={`1px solid ${theme.colors.gray99}`}
            >
              {archiveData?.photoUrls.length === 0 ? (
                <NoItemBox width="inherit" height="inherit" text="사진 " />
              ) : (
                <Carousel
                  imgUrlArr={archiveData?.photoUrls}
                  width="345px"
                  height="345px"
                />
              )}
            </Box>
            <Box
              height="88px"
              margin="20px 5px"
              overflowY="auto"
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
                  background: ${theme.colors.black};
                }
              `}
            >
              {archiveData?.comment === '' ? (
                <NoItemBox width="inherit" height="inherit" text="코멘트" />
              ) : (
                <Box width="inherit" height="fit-content" margin="0 10px">
                  <InnerHTML data={archiveData?.comment} />
                </Box>
              )}
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
