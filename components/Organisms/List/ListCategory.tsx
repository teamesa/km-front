import { useRouter } from 'next/router';

import { FlexBox, Tag } from 'components/Atoms';
import theme from 'styles/theme';

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
      background="white"
    >
      {data.map(({ label, value }, index) => (
        <Tag
          key={index}
          color={
            filter === value
              ? `${theme.colors.black}`
              : `${theme.colors.gray99}`
          }
          fontSize="13px !important"
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
