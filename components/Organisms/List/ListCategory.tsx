import { useRouter } from 'next/router';

import { FlexBox, Box, Tag } from 'components/Atoms';
import { Z_INDEX } from 'constants/common';

export default function ListCategory({
  data,
}: {
  data: { label: string; value: string }[];
}) {
  const router = useRouter();
  const { filter = '' } = router.query;

  return (
    <FlexBox
      padding="14px 0"
      overflow="auto"
      width="auto"
      role="tablist"
      position="sticky"
      top="45px"
      background="white"
      zIndex={Z_INDEX.SKY}
    >
      {data.map(({ label, value }, index) => (
        <Tag
          key={index}
          type={filter === value ? 'bord' : 'default'}
          marginRight="15px"
          onClick={() => {
            router.push({
              pathname: router.pathname,
              query: {
                filter: value,
              },
            });
          }}
        >
          {label}
        </Tag>
      ))}
    </FlexBox>
  );
}
