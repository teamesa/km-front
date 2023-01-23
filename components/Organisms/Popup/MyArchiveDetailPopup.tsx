import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { CloseBtn } from 'assets/mypage';
import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import MyArchiveDetailCard from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCard';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import {
  ClickedItemId,
  ClickedArchiveId,
  MyArchiveDetailProps,
} from 'states/myArchiveDetail';
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
          <Box marginLeft="172.5px">
            <Button onClick={handleClosePopup}>
              <CloseBtn />
            </Button>
          </Box>
          <MyArchiveDetailCard
            typeBadge={archiveData.typeBadge}
            updatedAt={archiveData.updatedAt}
            title={archiveData.title}
            comment={archiveData.comment}
            starRating={archiveData.starRating}
            food={archiveData.food}
            cafe={archiveData.cafe}
            photoUrls={archiveData.photoUrls}
            archiveAdditionalInfos={archiveData.archiveAdditionalInfos}
            itemId={archiveData.itemId}
          />
        </Box>
      </Popup>
    );
  } else {
    return (
      <Popup>
        <Box>
          <Box marginLeft="172.5px">
            <Button onClick={handleClosePopup}>
              <CloseBtn />
            </Button>
          </Box>
        </Box>
      </Popup>
    );
  }
};

export default MyArchiveDetailPopup;
