import Link from 'next/link';
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
  const showDescription = () => {
    if (title === '티켓구매') {
      return description ? (
        <Button>
          <Link href={description}>
            <a target="_blank" rel="noreferrer">
              티켓 구매하기 {'>'}
            </a>
          </Link>
        </Button>
      ) : null;
    } else if (title === '홈페이지') {
      return description ? (
        <Button>
          <Link href={description}>
            <a target="_blank" rel="noreferrer">
              홈페이지 이동 {'>'}
            </a>
          </Link>
        </Button>
      ) : null;
    }
    return description;
  };
  return (
    <FlexBox marginBottom="20px" fontSize="13px">
      <Box flex="0 0 75px" fontWeight="500" lineHeight="20px">
        {title === '홈페이지' || title === '티켓구매' ? null : title}
        {/* {title} */}
      </Box>
      <Box lineHeight="20px">{showDescription()}</Box>
    </FlexBox>
  );
}
