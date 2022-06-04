import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Box } from 'components/Atoms';
import { DetailState } from 'states';
import theme from 'styles/theme';

export default function ExhibitionImagesSection() {
  const router = useRouter();
  const { id } = router.query;
  const data = useRecoilValue(DetailState(Number(id)));

  // TODO : GET /api/item/info/{itemId}에 포스터 사진 요청으로 대기중
  return <Box width="100%" height="300px" background={theme.colors.lime} />;
}
