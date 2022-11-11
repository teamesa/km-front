import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import noImage from 'assets/common/no_image_375x500.png';
import { Box, Button, Input } from 'components/Atoms';
import FlexBox from 'components/Atoms/FlexBox';
import { getSummary, TGetSummary } from 'states/detail';

export default function ArchiveTitle({
  name,
  control,
}: {
  name: string;
  control: any;
}) {
  const router = useRouter();
  const { id, exhibitionId } = router.query;
  const [summaryData, setSummaryData] = useState<TGetSummary>();
  const listImage = summaryData?.listImageUrl;
  const exhibitionTitle = summaryData?.title;

  useEffect(() => {
    async function getData() {
      const data = await getSummary({ itemId: Number(exhibitionId ?? id) });
      setSummaryData(data);
    }
    getData();
  }, [exhibitionId, id]);

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <FlexBox marginTop="48px" paddingBottom="20px">
          <Image
            src={listImage ? listImage : noImage}
            alt="image"
            width="64px"
            height="64px"
            objectFit="cover"
          />
          <Box fontSize="13px" margin="10px 15px">
            {exhibitionTitle}
          </Box>
          <Button
            type="button"
            onClick={() => {
              router.back();
            }}
          >
            임시버튼
          </Button>
        </FlexBox>
      )}
    ></Controller>
  );
}
