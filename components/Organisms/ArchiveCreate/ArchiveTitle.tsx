import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import { SearchClose } from 'assets/archive/SearchClose';
import noImage from 'assets/common/no_image_375x500.png';
import { Box, Button, Input } from 'components/Atoms';
import FlexBox from 'components/Atoms/FlexBox';
import { TGetSummary, getSummary } from 'states/detail';

export default function ArchiveTitle({
  name,
  control,
}: {
  name: string;
  control: any;
}) {
  const router = useRouter();
  const { exhibitionId } = router.query;
  const [summaryData, setSummaryData] = useState<TGetSummary>();
  const listImage = summaryData?.listImageUrl;
  const exhibitionTitle = summaryData?.title;

  useEffect(() => {
    async function getData() {
      const data = await getSummary({ itemId: Number(exhibitionId) });
      setSummaryData(data);
    }
    getData();
  }, [exhibitionId]);

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
          {exhibitionId ? null : (
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
