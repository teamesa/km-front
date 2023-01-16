import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import Introdeuce from 'components/Organisms/Info/Introduce';
import PrivacyTerms from 'components/Organisms/Info/PrivacyTerms';
import ServiceTerms from 'components/Organisms/Info/ServiceTerms';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const getInfoType = (type: string[] | string | undefined) => {
  switch (type) {
    case 'privacy':
    case 'service':
    case 'introduce':
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

  if (type === 'privacy') {
    return (
      <Box borderTop="1px solid #f3f3f3" paddingTop="30px" paddingX="15px">
        <PrivacyTerms />
      </Box>
    );
  } else if (type === 'service') {
    <Box borderTop="1px solid #f3f3f3" paddingTop="30px" paddingX="15px">
      <ServiceTerms />
    </Box>;
  }
  return (
    <Box borderTop="1px solid #f3f3f3" paddingTop="30px" paddingX="15px">
      <Introdeuce />
    </Box>
  );
}
