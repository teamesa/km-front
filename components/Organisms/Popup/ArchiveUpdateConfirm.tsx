import { useRouter } from 'next/router';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { Box, Button } from 'components/Atoms';
import Popup from 'components/Molecules/Popup';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import theme from 'styles/theme';
import { ArchiveSquareState } from 'states/archive-square';
import { useArchiveQuery } from 'api/v1/queryHooks/archive';

const ArchiveUpdateConfirm = () => {
  const router = useRouter();
  const { id } = router.query;
  const alertState = useRecoilValue(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const resetArchivePhotos = useResetRecoilState(ArchiveSquareState);
  const { useGetArchivesById } = useArchiveQuery();
  const { data: getArchive } = useGetArchivesById(Number(id));
  const exhibitionId = getArchive?.data.item.id;

  const handleClosePopup = () => {
    router.push(`/detail/${exhibitionId}`);
    resetArchivePhotos();
    setPopupName(POPUP_NAME.NULL);
  };

  return (
    <Popup>
      <Box
        width="315px"
        borderRadius="12px"
        height="167px"
        backgroundColor={theme.colors.white}
      >
        <Box padding="50px 40px">
          <Box
            fontSize="13px"
            lineHeight="1.54"
            textAlign="center"
            color={theme.colors.black}
          >
            {alertState.message}
          </Box>
        </Box>
        <Button
          height="50px"
          width="100%"
          fontSize="16px"
          borderRadius="0 0 12px 12px"
          backgroundColor={theme.colors.black}
          onClick={handleClosePopup}
        >
          <Box color={theme.colors.white}>확인</Box>
        </Button>
      </Box>
    </Popup>
  );
};

export default ArchiveUpdateConfirm;
