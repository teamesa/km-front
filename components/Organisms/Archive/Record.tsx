import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

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
import ExhibitionTitle from 'components/Organisms/Archive/ExhibitionTitle';
import Rating from 'components/Organisms/Archive/Rating';
import SearchTitle from 'components/Organisms/Archive/SearchTitle';
import { ArchiveWirteState } from 'states';
import theme from 'styles/theme';

interface ArchiveWirteProps {
  itemId: number;
  starRating: number;
  comment: string;
  photoUrls: string[];
  placeInfos: {
    address: string;
    name: string;
    placeType: 'FOOD' | 'CAFE';
    roadAddress: string;
  }[];
  food: string;
  cafe: string;
  visibleAtItem: boolean;
}

export default function Record() {
  const router = useRouter();
  const { title } = router.query;
  const [achiveWirte, setArchiveWirte] = useRecoilState(ArchiveWirteState);
  const { register, handleSubmit, formState, control } =
    useForm<ArchiveWirteProps>({
      mode: 'onChange',
    });

  const onSubmit = (data: any) => {
    setArchiveWirte(data);
    // router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box paddingTop="30px">코멘트 & 사진</Box>
      <Box paddingTop="10px">
        <TextArea
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

        <FlexBox marginTop="20px">
          <MapPoint />
          <Box marginLeft="10px" fontSize="13px">
            근처 다녀온 카페
          </Box>
        </FlexBox>

        <Box marginTop="30px" />
        <Box height="1px" backgroundColor={theme.colors.grayEE} />
        <Box marginTop="30px" />
        <FlexBox>
          <RadioLabel>
            <FlexBox>
              <CheckBox
                type="checkbox"
                {...register('visibleAtItem', { required: false })}
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
            onClick={() => router.push('/')}
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
            onClick={handleSubmit(onSubmit)}
          >
            등록
          </Button>
        </Box>
      </FlexBox>
    </form>
  );
}
