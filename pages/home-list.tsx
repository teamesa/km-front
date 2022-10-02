import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import HomeListCard from 'components/Organisms/HomeList/HomeListCard';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function HomeList() {
  const router = useRouter();
  useInitHeader({
    headerLeft: '전체보기',
    headerRight: 'close',
    headerRightAction: () => router.back(),
  });

  const mocks = [
    {
      photoUrl:
        'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/121430-ss.jpg',
      upperTitle: '10월 ,이달의 전시',
      lowerTitle: '우연히 웨스 앤더슨',
    },
    {
      photoUrl:
        'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-07-24/131254-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20%284%29.jpg',
      upperTitle: '빛의 하모니,',
      lowerTitle: '아르떼 뮤지엄 제주',
    },
    {
      photoUrl:
        'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/122323-%EB%A6%AC%EC%8A%A4%ED%8A%B8.png',
      upperTitle: '고양,고양고양이',
      lowerTitle: '고양이 화가 - 루이스 웨인',
    },
  ];

  return (
    <Box borderTop="1px solid #f3f3f3">
      {mocks.map(({ photoUrl, upperTitle, lowerTitle }, index) => (
        <HomeListCard
          photoUrl={photoUrl}
          upperTitle={upperTitle}
          lowerTitle={lowerTitle}
          key={`HomeListCard-${index}`}
        />
      ))}
    </Box>
  );
}
