import ListCard from 'components/Organisms/List/ListCard';

export default function ListSection() {
  const data = [
    {
      image:
        'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg',
      type: '전시회',
      day: 63,
      pay: '무료',
      name: '요시고 사진전 : 따뜻한 휴일의 기록',
      like: 34,
      rate: 4.5,
      id: 1,
    },
    {
      image:
        'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg',
      type: '콘서트',
      day: 63,
      pay: '유료',
      name: '화가의 사람, 사람들',
      like: 34,
      rate: 4.5,
      id: 2,
    },
    {
      image:
        'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg',
      type: '전시회',
      pay: '유료',
      name: '요시고 사진전 : 따뜻한 휴일의 기록',
      like: 34,
      rate: 4.5,
      id: 3,
    },
    {
      image:
        'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/1.jpeg',
      type: '뮤직페스티벌',
      day: 63,
      pay: '유료',
      name: '황도유 : 희랍 화첩, 서른 세송이',
      like: 34,
      rate: 4.5,
      id: 4,
    },
  ];

  return (
    <>
      {data.map((list) => (
        <ListCard
          image={list.image}
          type={list.type}
          day={list.day}
          pay={list.pay}
          name={list.name}
          like={list.like}
          rate={list.rate}
          key={list.id}
        />
      ))}
    </>
  );
}
