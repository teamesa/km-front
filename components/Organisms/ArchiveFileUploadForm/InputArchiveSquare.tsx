import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Plus } from 'assets/archive/Plus';
import { Box, Input } from 'components/Atoms';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, PopupNameState } from 'states';
import {
  ArchiveSquareState,
  ArchiveSquareStateEnum,
} from 'states/archive-square';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

export default function InputArchiveSquare() {
  const [archiveSquares, setArchiveSquareState] =
    useRecoilState(ArchiveSquareState);
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);

  const uploadArchivePicture = async ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const alreadyPhotos = archiveSquares.filter(
      ({ state }) => state === ArchiveSquareStateEnum.photo,
    );
    const alreadyPhotosCount = alreadyPhotos.length;
    if (
      target.files?.length === undefined ||
      target.files.length + alreadyPhotosCount > 3
    ) {
      setAlertState(ALERT_MESSAGE.ALERT.OVERFLOW_PICTURE);
      setPopupName(POPUP_NAME.OVERFLOW_PICTURE);
      return;
    }

    // setLoading
    const newLoading = new Array(target.files.length)
      .fill(1)
      .map((_, index) => ({
        key: alreadyPhotosCount + index,
        state: ArchiveSquareStateEnum.loading,
      }));
    const newLoadingCount = newLoading.length;
    if (newLoadingCount === 3) {
      setArchiveSquareState([...newLoading]);
    } else if (newLoadingCount === 2 && alreadyPhotosCount == 1) {
      setArchiveSquareState([...alreadyPhotos, ...newLoading]);
    } else if (newLoadingCount === 2 && alreadyPhotosCount == 0) {
      const input: ArchiveSquareState = {
        key: 2,
        state: ArchiveSquareStateEnum.input,
      };
      setArchiveSquareState([...newLoading, input]);
    } else if (newLoadingCount == 1 && alreadyPhotosCount == 2) {
      setArchiveSquareState([...alreadyPhotos, ...newLoading]);
    } else if (newLoadingCount == 1 && alreadyPhotosCount == 1) {
      const input: ArchiveSquareState = {
        key: 2,
        state: ArchiveSquareStateEnum.input,
      };
      setArchiveSquareState([...alreadyPhotos, ...newLoading, input]);
    } else if (newLoadingCount == 1 && alreadyPhotosCount == 0) {
      const input: ArchiveSquareState = {
        key: 1,
        state: ArchiveSquareStateEnum.input,
      };
      const blank: ArchiveSquareState = {
        key: 2,
        state: ArchiveSquareStateEnum.empty,
      };
      setArchiveSquareState([...newLoading, input, blank]);
    }

    // setData
    const newArchivePhotos = await Promise.all(
      Array.from(target.files).map(
        async (file, index): Promise<ArchiveSquareState> => {
          const formData = new FormData();
          formData.append('file', file, file.name);
          const axios = customAxios();
          try {
            const { data } = await axios.post('/api/image', formData, {
              headers: {
                'content-type': 'multipart/form-data',
              },
            });
            return {
              key: alreadyPhotosCount + index,
              state: ArchiveSquareStateEnum.photo,
              pictureSrc: data,
            };
          } catch (_) {}
          return {
            key: alreadyPhotosCount + index,
            state: ArchiveSquareStateEnum.photo,
            pictureSrc: undefined,
          };
        },
      ),
    );

    const newFilteredArchivePhotos = newArchivePhotos.filter(
      ({ pictureSrc }) => pictureSrc !== undefined,
    );
    const newFilteredArchivePhotosCount = newFilteredArchivePhotos.length;
    if (newFilteredArchivePhotosCount === 3) {
      setArchiveSquareState([...newFilteredArchivePhotos]);
    } else if (
      newFilteredArchivePhotosCount === 2 &&
      alreadyPhotosCount === 1
    ) {
      setArchiveSquareState([...alreadyPhotos, ...newFilteredArchivePhotos]);
    } else if (
      newFilteredArchivePhotosCount === 2 &&
      alreadyPhotosCount === 0
    ) {
      const input: ArchiveSquareState = {
        key: 2,
        state: ArchiveSquareStateEnum.input,
      };
      setArchiveSquareState([...newFilteredArchivePhotos, input]);
    } else if (
      newFilteredArchivePhotosCount === 1 &&
      alreadyPhotosCount === 2
    ) {
      setArchiveSquareState([...alreadyPhotos, ...newFilteredArchivePhotos]);
    } else if (
      newFilteredArchivePhotosCount === 1 &&
      alreadyPhotosCount === 1
    ) {
      const input: ArchiveSquareState = {
        key: 2,
        state: ArchiveSquareStateEnum.input,
      };
      setArchiveSquareState([
        ...alreadyPhotos,
        ...newFilteredArchivePhotos,
        input,
      ]);
    } else if (
      newFilteredArchivePhotosCount === 1 &&
      alreadyPhotosCount === 0
    ) {
      const input: ArchiveSquareState = {
        key: 1,
        state: ArchiveSquareStateEnum.input,
      };
      const blank: ArchiveSquareState = {
        key: 2,
        state: ArchiveSquareStateEnum.empty,
      };
      setArchiveSquareState([...newFilteredArchivePhotos, input, blank]);
    } else if (newFilteredArchivePhotosCount === 0) {
      setArchiveSquareState(archiveSquares);
    }
  };
  return (
    <Box
      width="111px"
      height="111px"
      backgroundColor={theme.colors.gray99}
      position="relative"
    >
      <Input
        width="100%"
        height="100%"
        type="file"
        opacity="0"
        border="none"
        id="profile"
        accept="image/gif, image/jpeg, image/png, image/heic"
        multiple={true}
        backgroundColor="transparent"
        onChange={(e) => uploadArchivePicture(e)}
        css={css`
          position: relative;
          z-index: 2;
          cursor: pointer;
        `}
      />
      <Box
        width="20px"
        height="20px"
        position="absolute"
        top="46px"
        left="46px"
      >
        <Plus />
      </Box>
    </Box>
  );
}
