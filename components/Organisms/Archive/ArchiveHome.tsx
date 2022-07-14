import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { MapPoint } from 'assets/archive/MapPoint';
import { Plus } from 'assets/archive/Plus';
import { Box, Button, FlexBox, RadioLabel, TextArea } from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import AddressInput from 'components/Molecules/AddressInput';
import ExhibitionTitle from 'components/Organisms/Archive/ExhibitionTitle';
import Rating from 'components/Organisms/Archive/Rating';
import SearchTitle from 'components/Organisms/Archive/SearchTitle';
import { ArchiveWirteState } from 'states';
import { ArchiveWirteProps } from 'states/archiveWirte';
import theme from 'styles/theme';
import customAxios from 'utils/hooks/customAxios';

export default function ArchiveHome() {
  const router = useRouter();
  const { id, title } = router.query;
  const thumbnailImageUrl = String(router.query.thumbnailImageUrl);
  const [checked, setChecked] = useState(title ? true : false);
  // const foodAddress = useRecoilState(ArchiveWirteFood);
  // const cafeAddress = useRecoilState(ArchiveWirteCafe);
  const [archiveWirte, setArchiveWirte] = useRecoilState(ArchiveWirteState);
  const { register, handleSubmit, formState, control } =
    useForm<ArchiveWirteProps>({
      mode: 'onChange',
      defaultValues: {
        ...archiveWirte,
        visibleAtItem: id ? true : false,
      },
    });

  const onSubmit = (data: ArchiveWirteProps) => {
    setArchiveWirte(data);
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        {/* {title ? (
          <ExhibitionTitle
            title={title}
            thumbnailImageUrl={thumbnailImageUrl}
          />
        ) : (
          <SearchTitle />
        )} */}
        <Box textAlign="center" fontSize="18px">
          <Box>이 문화생활, 어땠나요?</Box>
          <Box marginTop="16px">
            <Rating name="starRating" control={control} />
          </Box>
        </Box>
        <Box
          height="1px"
          marginTop="30px"
          backgroundColor={theme.colors.grayEE}
          color={theme.colors.grayEE}
        />
        <Box paddingTop="30px">코멘트 & 사진</Box>
        <TextArea
          marginTop="10px"
          padding="15px"
          height="150px"
          overflow="scroll"
          backgroundColor={theme.colors.grayF8}
          placeholder={`그날의 기분, 분위기, 만족도를 담은 코멘트를 \n 기록해주세요. (1,000자 이내)`}
          {...register('comment')}
        />
        <Button paddingTop="20px">
          <Box
            width="111px"
            height="111px"
            backgroundColor={theme.colors.gray99}
          >
            <Box position="relative" top="46px">
              <Plus />
            </Box>
          </Box>
        </Button>
        <Box marginTop="30px" />
        <Box height="1px" backgroundColor={theme.colors.grayEE} />
        <FlexBox marginTop="30px">
          <MapPoint />
          <Box marginLeft="10px" fontSize="13px">
            근처 다녀온 맛집
          </Box>
        </FlexBox>
        <Button marginTop="10px" width="100%">
          <FlexBox>
            <Box flex={1.5}>
              <AddressInput
                name="placeInfos[0]"
                type="FOOD"
                control={control}
              />
            </Box>
            <Box
              padding="13px 23px 12px"
              color={theme.colors.white}
              backgroundColor={theme.colors.black}
              fontSize="12px"
              fontWeight={500}
              flex={0.5}
              marginLeft="5px"
            >
              장소찾기
            </Box>
          </FlexBox>
        </Button>

        <FlexBox marginTop="20px">
          <MapPoint />
          <Box marginLeft="10px" fontSize="13px">
            근처 다녀온 카페
          </Box>
        </FlexBox>
        <Button marginTop="10px" width="100%">
          <FlexBox>
            <Box flex={1.5}>
              <AddressInput
                name="placeInfos[1]"
                type="CAFE"
                control={control}
              />
            </Box>
            <Box
              padding="13px 23px 12px"
              color={theme.colors.white}
              backgroundColor={theme.colors.black}
              fontSize="12px"
              fontWeight={500}
              flex={0.5}
              marginLeft="5px"
            >
              장소찾기
            </Box>
          </FlexBox>
        </Button>
        <Box marginTop="30px" />
        <Box height="1px" backgroundColor={theme.colors.grayEE} />
        <Box marginTop="30px" />
        <FlexBox>
          <RadioLabel>
            <FlexBox>
              <CheckBox
                type="checkbox"
                defaultChecked={false}
                {...(register('visibleAtItem'), { required: true })}
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
            <Button
              backgroundColor={theme.colors.black}
              color={theme.colors.white}
              width="100%"
              height="50px"
              onClick={handleSubmit(onSubmit)}
            >
              등록
            </Button>
          </Box>
        </FlexBox>
      </Box>
    </form>
  );
}
