import { useForm } from 'react-hook-form';

import { MapPoint } from 'assets/archive/MapPoint';
import { Plus } from 'assets/archive/Plus';
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
import theme from 'styles/theme';

interface ArchiveWirteProps {
  itemId: number;
  starRating: number;
  comment: string;
  photoUrls: string[];
  placeInfos: {
    address: string;
    name: string;
    placeType: string;
    roadAddress: string;
  }[];
  visibleAtItem: boolean;
}

export default function Write() {
  const { register, handleSubmit, formState, control } =
    useForm<ArchiveWirteProps>({
      mode: 'onChange',
    });
  return (
    <>
      <Box paddingTop="30px">코멘트 & 사진</Box>
      <Box paddingTop="10px">
        <TextArea
          padding="15px"
          height="150px"
          overflow="scroll"
          backgroundColor={theme.colors.grayF8}
          placeholder={`그날의 기분, 분위기, 만족도를 담은 코멘트를 \n 기록해주세요. (1,000자 이내)`}
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
          <Box marginLeft="10px">근처 다녀온 맛집</Box>
        </FlexBox>
        <Button marginTop="10px" width="100%">
          <FlexBox>
            <Box flex={1.5}>
              <AddressInput name="placeInfos" control={control} />
            </Box>
            {/* <Input
              readOnly
              padding="12px 15px"
              border={`1px solid ${theme.colors.grayBB}`}
              backgroundColor={theme.colors.white}
              placeholder="장소찾기를 선택해 추가해주세요."
             
            /> */}
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
          <Box marginLeft="10px">근처 다녀온 카페</Box>
        </FlexBox>
        <Button marginTop="10px" width="100%">
          <FlexBox>
            <Input
              padding="12px 15px"
              border={`1px solid ${theme.colors.grayBB}`}
              backgroundColor={theme.colors.white}
              placeholder="장소찾기를 선택해 추가해주세요."
              flex={1.5}
            />
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
          {/* <Input
            type="checkbox"
            width="20px"
            height="20px"
            backgroundColor={theme.colors.grayEE}
          /> */}
          <RadioLabel>
            <FlexBox>
              <CheckBox
                type="checkbox"
                {...register('visibleAtItem', { required: true })}
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
      </Box>
      <FlexBox marginTop="30px" justifyContent="space-between">
        <Box flex={1}>
          <Button
            border={`1px solid ${theme.colors.grayAA}`}
            backgroundColor={theme.colors.white}
            color={theme.colors.black}
            padding="15px 65px"
            width="100%"
            height="50px"
          >
            취소
          </Button>
        </Box>
        <Box flex={1} paddingLeft="5px">
          <Button
            backgroundColor={theme.colors.black}
            color={theme.colors.white}
            padding="15px 65px"
            width="100%"
            height="50px"
          >
            등록
          </Button>
        </Box>
      </FlexBox>
    </>
  );
}
