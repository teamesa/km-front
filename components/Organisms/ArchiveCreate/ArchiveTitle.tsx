import Image from 'next/image';
import { useRouter } from 'next/router';
import { Controller } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { SearchClose } from 'assets/archive/SearchClose';
import noImage from 'assets/common/no_image_375x500.png';
import { Box, Button } from 'components/Atoms';
import FlexBox from 'components/Atoms/FlexBox';
import { getItemsInfo } from 'states/detail';

export default function ArchiveTitle({
  name,
  control,
}: {
  name: string;
  control: any;
}) {
  const router = useRouter();
  const { checked } = router.query;
  const data = useRecoilValue(getItemsInfo);
  const listImage = data?.listImageUrl;
  const exhibitionTitle = data?.title;

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <FlexBox
          marginTop="48px"
          paddingBottom="20px"
          justifyContent="space-between"
        >
          <FlexBox>
            <Image
              src={listImage ? listImage : noImage}
              alt="image"
              width="64px"
              height="64px"
              objectFit="cover"
            />
            <Box fontSize="13px" margin="10px 30px 17px 15px">
              {exhibitionTitle}
            </Box>
          </FlexBox>
          {!checked && (
            <Button
              type="button"
              onClick={() => {
                router.back();
              }}
              width="10px"
              height="10px"
              paddingTop="10px"
            >
              <SearchClose />
            </Button>
          )}
        </FlexBox>
      )}
    ></Controller>
  );
}
