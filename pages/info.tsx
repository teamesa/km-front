import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import PrivacyTerms from 'components/Organisms/Info/PrivacyTerms';
import ServiceTerms from 'components/Organisms/Info/ServiceTerms';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const getInfoType = (type: string[] | string | undefined) => {
  switch (type) {
    case 'privacy':
    case 'service':
      return type;
    default:
      return 'disabled';
  }
};

export default function Info() {
  const router = useRouter();
  const { type } = router.query;
  useInitHeader({
    headerLeft: getInfoType(type),
    headerRight: 'close',
    headerRightAction: () => router.back(),
  });

  return (
    <Box borderTop="1px solid #f3f3f3" paddingTop="30px" paddingX="15px">
      {getInfoType(type) === 'privacy' ? <PrivacyTerms /> : <ServiceTerms />}
    </Box>
  );
}
