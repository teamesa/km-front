import { useRouter } from 'next/router';

import { FlexBox, Box, Button } from 'components/Atoms';

interface DescriptionInfoProps {
  title: string;
  description: string;
}

export default function DescriptionInfo({
  title,
  description,
}: DescriptionInfoProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(description);
  };

  const showDescription = () => {
    if (title === '시간') {
      return description === '' ? '-' : description;
    } else if (title === '홈페이지') {
      return description === undefined ? null : (
        <Button onClick={handleClick}>홈페이지 이동 {'>'}</Button>
      );
    }
    return description;
  };
  return (
    <FlexBox marginBottom="20px" fontSize="13px">
      <Box flex={0.5}>{title === '홈페이지' ? '' : title}</Box>
      <Box flex={2}>{showDescription()}</Box>
    </FlexBox>
  );
}
