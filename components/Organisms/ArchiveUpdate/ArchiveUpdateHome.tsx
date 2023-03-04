import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilRefresher_UNSTABLE,
} from 'recoil';

import { putArchivesById } from 'api/v1/archive';
import { MapPoint } from 'assets/archive/MapPoint';
import { Box, Button, FlexBox, RadioLabel, TextArea } from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import AddressInput from 'components/Molecules/AddressInput';
import CheckForbiddenWords from 'components/Molecules/CheckForbiddenWords';
import Rating from 'components/Molecules/Rating';
import ArchiveFileUploadForm from 'components/Organisms/ArchiveFileUploadForm';
import ArchiveTitle from 'components/Organisms/ArchiveUpdate/ArchiveTitle';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { ArchiveRequest } from 'constants/type/api';
import { AlertState, PopupNameState } from 'states';
import { useGetArchivesById } from 'states/archiveWirte';
import theme from 'styles/theme';

export default function ArchiveUpdateHome() {
  const router = useRouter();
  const { id } = router.query;
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const getArchive = useRecoilValue(useGetArchivesById(Number(id)));
  const refreshGetArchive = useRecoilRefresher_UNSTABLE(
    useGetArchivesById(Number(id)),
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ArchiveRequest>({
    mode: 'onChange',
    defaultValues: {
      starRating: getArchive?.starRating ?? 5,
      visibleAtItem: getArchive.visibleAtItem,
    },
  });

  const onCancel = () => {
    setAlertState(ALERT_MESSAGE.ALERT.CANCEL_RECONFIRM);
    setPopupName(POPUP_NAME.ALERT_ARCHIVE_CANCEL_CONFIRM);
  };

  const onUpdateSubmit = async (data: ArchiveRequest) => {
    if (!id) {
      throw Error('아카이브 아이디가 없습니다.');
    }
    const customData = {
      comment: data.comment === undefined ? '' : data.comment,
      photoUrls: data.photoUrls === undefined ? [] : data.photoUrls,
      starRating: data.starRating,
      visibleAtItem: data.visibleAtItem,
      placeInfos: data.placeInfos.filter((item: any) =>
        item === undefined ? null : item,
      ),
    };
    try {
      await putArchivesById({ archiveId: Number(id), request: customData });
      setAlertState(ALERT_MESSAGE.ALERT.SAVED_SUCCESS);
      setPopupName(POPUP_NAME.ALERT_CONFIRM_BACK);
      refreshGetArchive();
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
                userRating={getArchive?.starRating ?? 5}
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
            defaultValue={getArchive?.comment}
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
              defaultValue={getArchive?.food}
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
              defaultValue={getArchive?.cafe}
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
                  defaultChecked={getArchive?.visibleAtItem}
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
                disabled={!errors}
                onClick={handleSubmit(onUpdateSubmit)}
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
