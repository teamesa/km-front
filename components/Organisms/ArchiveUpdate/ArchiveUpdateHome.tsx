import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

import { MapPoint } from 'assets/archive/MapPoint';
import { Box, Button, FlexBox, RadioLabel, TextArea } from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import AddressInput from 'components/Molecules/AddressInput';
import Rating from 'components/Molecules/Rating';
import ArchiveFileUploadForm from 'components/Organisms/ArchiveFileUploadForm';
import ArchiveTitle from 'components/Organisms/ArchiveUpdate/ArchiveTitle';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, archiveWriteState, PopupNameState } from 'states';
import {
  ArchiveSquareState,
  ArchiveSqureStateEnum,
} from 'states/archive-square';
import { ArchiveWirteProps } from 'states/archiveWirte';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

export default function ArchiveUpdateHome() {
  const router = useRouter();
  const axios = customAxios();
  const { id } = router.query;
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const [archiveWrite, setArchiveWrite] = useRecoilState(archiveWriteState);
  const archivePhotos = useRecoilValue(ArchiveSquareState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ArchiveWirteProps>({
    mode: 'onChange',
    defaultValues: {
      starRating: archiveWrite?.starRating ?? 5,
      visibleAtItem: archiveWrite?.visibleAtItem,
    },
  });

  useEffect(() => {
    return () => {
      setArchiveWrite(undefined);
    };
  }, [setArchiveWrite]);

  const onCancel = () => {
    setAlertState(ALERT_MESSAGE.ALERT.CANCEL_RECONFIRM);
    setPopupName(POPUP_NAME.ALERT_ARCHIVE_CANCEL_CONFIRM);
  };

  // TODO api 되는지 확인필요
  const onUpdateSubmit = async (data: ArchiveWirteProps) => {
    const postData = {
      ...data,
      itemId: Number(id),
      placeInfos: data.placeInfos.filter((item) =>
        item === undefined ? null : item,
      ),
      visibleAtItem: data.visibleAtItem,
      photoUrls: archivePhotos
        .filter(
          (archivePhoto) => archivePhoto.state === ArchiveSqureStateEnum.photo,
        )
        .map((archivePhoto) => archivePhoto.pictureSrc)
        .filter(isDefined),
    };
    setArchiveWrite(postData);
    try {
      await axios({
        method: 'PUT',
        url: `/api/archives`,
        data: postData,
      });
      setAlertState(ALERT_MESSAGE.ALERT.SAVED_SUCCESS);
      setPopupName(POPUP_NAME.ALERT_CONFIRM_BACK);
    } catch (error: any) {
      setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
      setPopupName(POPUP_NAME.ALERT_CONFIRM);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onUpdateSubmit)}>
        <Box>
          <ArchiveTitle name="itemId" control={control} />
          <Box textAlign="center" fontSize="18px">
            <Box>이 문화생활, 어땠나요?</Box>
            <Box marginTop="16px">
              <Rating
                name="starRating"
                control={control}
                userRating={archiveWrite?.starRating ?? 5}
              />
            </Box>
          </Box>
          <Box
            height="1px"
            marginTop="30px"
            backgroundColor={theme.colors.grayEE}
            color={theme.colors.grayEE}
          />
          <Box paddingTop="30px" fontSize="13px">
            코멘트 & 사진
          </Box>
          <TextArea
            marginTop="10px"
            padding="15px"
            height="150px"
            overflow="scroll"
            fontSize="13px"
            lineHeight="18px"
            backgroundColor={theme.colors.grayF8}
            placeholder={`그날의 기분, 분위기, 만족도를 담은 코멘트를 \n 기록해주세요. (1,000자 이내)`}
            defaultValue={archiveWrite?.comment}
            {...register('comment')}
          />
          <ArchiveFileUploadForm />
          <Box marginTop="30px" />
          <Box height="1px" backgroundColor={theme.colors.grayEE} />
          <FlexBox marginTop="30px">
            <MapPoint />
            <Box marginLeft="10px" fontSize="13px">
              근처 다녀온 맛집
            </Box>
          </FlexBox>
          <Button type="button" marginTop="10px" width="100%">
            <AddressInput
              name="placeInfos[0]"
              type="FOOD"
              control={control}
              defaultValue={archiveWrite?.food}
            />
          </Button>
          <FlexBox marginTop="20px">
            <MapPoint />
            <Box marginLeft="10px" fontSize="13px">
              근처 다녀온 카페
            </Box>
          </FlexBox>
          <Button type="button" marginTop="10px" width="100%">
            <AddressInput
              name="placeInfos[1]"
              type="CAFE"
              control={control}
              defaultValue={archiveWrite?.cafe}
            />
          </Button>
          <Box marginTop="30px" />
          <Box height="1px" backgroundColor={theme.colors.grayEE} />
          <Box marginTop="30px" />
          <FlexBox>
            <RadioLabel>
              <FlexBox>
                <CheckBox
                  type="checkbox"
                  {...register('visibleAtItem')}
                  defaultChecked={archiveWrite?.visibleAtItem}
                />
                <Box margin="3px 10px" fontSize="12px">
                  다른 사람도 보여주기
                </Box>
              </FlexBox>
            </RadioLabel>
          </FlexBox>
          <Box marginTop="10px" fontSize="12px" color={theme.colors.gray99}>
            다른 사람들이 내가 작성한 아카이브를 볼 수 있습니다. ☺
          </Box>
          <FlexBox marginTop="30px" justifyContent="space-between">
            <Box flex={1}>
              <Button
                type="button"
                border={`1px solid ${theme.colors.grayAA}`}
                backgroundColor={theme.colors.white}
                color={theme.colors.black}
                width="100%"
                height="50px"
                onClick={onCancel}
              >
                취소
              </Button>
            </Box>
            <Box flex={1} paddingLeft="5px">
              <Button
                backgroundColor={theme.colors.black}
                color={theme.colors.white}
                width="100%"
                height="50px"
                onClick={handleSubmit(onUpdateSubmit)}
                disabled={!errors}
              >
                수정
              </Button>
            </Box>
          </FlexBox>
        </Box>
      </form>
    </>
  );
}

function isDefined<T>(argument: T | undefined | null): argument is T {
  return argument !== undefined && argument !== null;
}
