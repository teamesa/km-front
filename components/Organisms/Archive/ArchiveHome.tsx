import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  useSetRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useRecoilState,
} from 'recoil';

import { MapPoint } from 'assets/archive/MapPoint';
import noImage from 'assets/common/no_image_375x500.png';
import {
  Box,
  Button,
  FlexBox,
  Input,
  RadioLabel,
  TextArea,
} from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import AddressInput from 'components/Molecules/AddressInput';
import ArchiveFileUploadForm from 'components/Organisms/Archive/ArchiveFileUploadForm';
import Rating from 'components/Organisms/Archive/Rating';
import SearchTitle from 'components/Organisms/Archive/SearchTitle';
import { ALERT_MESSAGE } from 'constants/alertMessage';
import { POPUP_NAME } from 'constants/popupName';
import { AlertState, ArchiveWriteState, PopupNameState } from 'states';
import {
  ArchiveSquareState,
  ArchiveSqureStateEnum,
} from 'states/archive-square';
import { ArchiveWirteProps } from 'states/archiveWirte';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

export default function ArchiveHome() {
  const pathname = window?.location?.pathname;
  const router = useRouter();
  const axios = customAxios();
  const { id, title, checked } = router.query;
  const thumbnailImageUrl = String(router.query.thumbnailImageUrl);
  const setAlertState = useSetRecoilState(AlertState);
  const setPopupName = useSetRecoilState(PopupNameState);
  const [archiveWrite, setArchiveWrite] = useRecoilState(ArchiveWriteState);
  const resetArchiveWrite = useResetRecoilState(ArchiveWriteState);
  const archivePhotos = useRecoilValue(ArchiveSquareState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ArchiveWirteProps>({
    mode: 'onChange',
    defaultValues: {
      visibleAtItem: checked ? true : false,
    },
  });

  useEffect(() => {
    resetArchiveWrite();
  }, [resetArchiveWrite]);

  const onWriteSubmit = async (data: ArchiveWirteProps) => {
    const postData = {
      ...data,
      itemId: Number(data.itemId),
      placeInfos: data.placeInfos.filter((item) =>
        item === undefined ? null : item,
      ),
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
        method: 'POST',
        url: `/api/archive`,
        data: postData,
      });
      setAlertState(ALERT_MESSAGE.ALERT.SAVED_SUCCESS);
      setPopupName(POPUP_NAME.ALERT_MOVE_MyARCHIVE_PAGE);
    } catch (error: any) {
      setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
      setPopupName(POPUP_NAME.ALERT_CONFIRM);
    }
  };

  const onUpdateSubmit = async (data: ArchiveWirteProps) => {
    const postData = {
      ...data,
      itemId: Number(data.itemId),
      starRating: archiveWrite?.starRating,
      placeInfos: data.placeInfos.filter((item) =>
        item === undefined ? null : item,
      ),
      photoUrls: archivePhotos
        .filter(
          (archivePhoto) => archivePhoto.state === ArchiveSqureStateEnum.photo,
        )
        .map((archivePhoto) => archivePhoto.pictureSrc)
        .filter(isDefined),
    };

    // try {
    //   await axios({
    //     method: 'PUT',
    //     url: `/api/archive`,
    //     data: postData,
    //   });
    //   setAlertState(ALERT_MESSAGE.ALERT.SAVED_SUCCESS);
    //   setPopupName(POPUP_NAME.ALERT_MOVE_MyARCHIVE_PAGE);
    // } catch (error: any) {
    //   setAlertState(ALERT_MESSAGE.ERROR.ARCHIVE_REGISTRATION_QUESTION);
    //   setPopupName(POPUP_NAME.ALERT_CONFIRM);
    // }
  };

  return (
    <>
      <Box>{title ? null : <SearchTitle />}</Box>
      <form onSubmit={handleSubmit(onWriteSubmit)}>
        <Box>
          {title ? (
            <FlexBox marginTop="48px" paddingBottom="20px">
              <Image
                src={thumbnailImageUrl ? thumbnailImageUrl : noImage}
                alt="image"
                width="64px"
                height="64px"
                objectFit="cover"
              />
              <Box fontSize="13px" margin="10px 15px">
                {title}
              </Box>
              <Input hidden value={id} {...register('itemId')} />
            </FlexBox>
          ) : null}
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
                  checked={checked ? true : false}
                  {...register('visibleAtItem')}
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
                border={`1px solid ${theme.colors.grayAA}`}
                backgroundColor={theme.colors.white}
                color={theme.colors.black}
                width="100%"
                height="50px"
                onClick={() => router.push('/')}
              >
                취소
              </Button>
            </Box>
            <Box flex={1} paddingLeft="5px">
              {pathname === '/archive/update' ? (
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
              ) : (
                <Button
                  backgroundColor={theme.colors.black}
                  color={theme.colors.white}
                  width="100%"
                  height="50px"
                  onClick={handleSubmit(onWriteSubmit)}
                  disabled={!errors}
                >
                  등록
                </Button>
              )}
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
