import Image from 'next/image';
import { useRouter } from 'next/router';
import { Controller } from 'react-hook-form';

import noImage from 'assets/common/no_image_375x500.png';
import { Box } from 'components/Atoms';
import FlexBox from 'components/Atoms/FlexBox';

export default function ArchiveTitle({
  name,
  control,
}: {
  name: string;
  control: any;
}) {
  const router = useRouter();
  const { id } = router.query;
  // const listImage = item?.imageUrl;
  // const exhibitionTitle = item?.title;

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
            {/* <Image
              src={listImage ? listImage : noImage}
              alt="image"
              width="64px"
              height="64px"
              objectFit="cover"
            /> */}
            <Box fontSize="13px" margin="10px 30px 17px 15px">
              {/* {exhibitionTitle} */}
            </Box>
          </FlexBox>
        </FlexBox>
      )}
    ></Controller>
  );
}
