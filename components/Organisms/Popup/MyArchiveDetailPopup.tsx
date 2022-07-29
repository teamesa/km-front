import { Box } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';

const MyArchiveDetailPopup = () => {
  return (
    <Popup>
      <Box background="#fff" width="90vw" height="90vh">
        <div>
          <div>전시회</div>
          <div>2022.04.02</div>
        </div>
        <div>
          <div>수정</div>
          <div>삭제</div>
        </div>
        <div>황도유: 희랍 화첩, 서른 세송이</div>
        <div>이미지슬라이드</div>
        <div>설명섦명설명</div>
        <div>
          <div>
            <div>food:소문난 감자탕</div>
            <div>cafe: 성수다락</div>
            <div>별점레이팅</div>
          </div>
        </div>
      </Box>
    </Popup>
  );
};

export default MyArchiveDetailPopup;
