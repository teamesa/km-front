import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { CloseBtn } from 'assets/mypage';
import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import MyArchiveDetailCard from 'components/Organisms/MyPage/Archive/Detail/MyArchiveDetailCard';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import { myArchiveDetailInfoState } from 'states/myArchiveDetail';

const MyArchiveDetailPopup = () => {
  const data = useRecoilValueLoadable(myArchiveDetailInfoState);

  const setPopupName = useSetRecoilState(PopupNameState);
  const handleClosePopup = () => {
    setPopupName(POPUP_NAME.NULL);
  };

  switch (data.state) {
    case 'hasValue':
      // if (data.contents. === 0) {
      //   return <Box>데이터 불러오기 실패</Box>;
      // }

      return (
        <Popup>
          <Box>
            <Box marginLeft="172.5px">
              <Button onClick={handleClosePopup}>
                <CloseBtn />
              </Button>
            </Box>
            <MyArchiveDetailCard
              typeBadge={data.contents.typeBadge}
              updatedAt={data.contents.updatedAt}
              title={data.contents.title}
              comment={data.contents.comment}
              starRating={data.contents.starRating}
              food={data.contents.food}
              cafe={data.contents.cafe}
              photoUrls={data.contents.photoUrls}
              archiveAdditionalInfos={data.contents.archiveAdditionalInfos}
            />
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
