import axios from 'axios';
import {
  selector,
  atom,
  useRecoilCallback,
  atomFamily,
  selectorFamily,
} from 'recoil';

import { MonthlyFreeItemCardProps } from './../components/Organisms/Home/ModuleTypes';

import {
  ModuleData,
  MonthlyFreeItemProps,
} from 'components/Organisms/Home/ModuleTypes';

export const getHomeInfo = async (): Promise<ModuleData[]> => {
  const _ = await axios({
    url: `/api/item/detail/${1099}`,
    method: 'GET',
  });

  return [
    {
      moduleName: 'key-visual',
      data: {
        index: 0,
        keyvisualDatas: [
          {
            photoUrl: 'fdasfsa',
            upperTitle: '10월',
            lowerTitle: '이달의 전시',
          },
        ],
      },
    },
    {
      moduleName: 'swipe-item',
      data: {
        index: 1,
        thumbnailPhotoUrl:
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-07-24/125415-0bea704056e58f6195dd80ef18b09d3a_VOCpostergiorgiko.jpg',
        photoUrls: [
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-07-24/125547-11.jpg',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-07-24/125549-12.jpg',
        ],
        title: {
          text: 'VANGUARDS OF THE COSMOS : GIORGIKO x MOONASSI',
          link: '/detail/647',
        },
        content: {
          text: '이달의 추천 전시회, 같이 보러 갈래? 에브리데이 몬데이에서 열리는 이번 듀엣전을 통해 두 작가는 각자의 세계에서 우주라는 공통된 주제로 무한의 개념을 유한의 예술 작업으로 표현하고자 한다.우주의 선구자들’은 미지의 공간으로 모험하는 것에 관한 것이다. "코스모"는 우리가 살고 있는 물리적 그리고 은유적 우주 모두를 말하고, "선봉자들"은 미지의 영역으로 가는 길을 이끄는 사람들이다.',
          link: '/detail/647',
        },
        keywords: ['#전시회', '#한가람미술관'],
      },
    },
    {
      moduleName: 'swipe-item',
      data: {
        index: 2,
        thumbnailPhotoUrl:
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/122816-KakaoTalk_20211024_201607908_02.jpg',
        photoUrls: [
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/122826-KakaoTalk_20211024_201112747.jpg',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/122829-KakaoTalk_20211024_201112747_01.jpg',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/122833-KakaoTalk_20211024_201112747_02.jpg',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-06-27/122839-KakaoTalk_20220408_153706828_04.jpg',
        ],
        title: {
          text: '사심을 가득채운 우리집 고양이 콘서트',
          link: '/detail/516',
        },
        content: {
          text: '미오 그 고양이의 귀여움은 어디까지 인가? 이 고양이는 너무 귀엽습니다. 모두들 보면 빠질 정도죠. 그래서 미오네집에서 미오의 놀이시간 콘서트를 개최합니다. 우아한 몸짓에 흠뻑 취하는 자신을 발견하실 수 있으실 겁니다.',
          link: '/detail/516',
        },
        keywords: ['#전시회', '#미오네집'],
      },
    },
    {
      moduleName: 'monthly-free-item',
      data: {
        index: 3,
        contents: [
          {
            id: 1099,
            presentationImage: {
              url: 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-03/182036-1660956474412.jpg',
              link: '/detail/1099',
            },
            typeBadge: { text: '콘서트', typeBadge: true },
            title: {
              text: 'BLACKPINK WORLD TOUR BORN PINK SEOUL',
              link: '/detail/1099',
            },
            heart: {
              heartClicked: true,
              link: '/api/pick/1099?status=',
              id: 1099,
            },
            listItemAdditionalInfo: {
              heartCount: 1,
              grade: 0,
              archiveCount: 0,
            },
          },
          {
            id: 1097,
            presentationImage: {
              url: 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-03/181129-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20%282%29.jpg',
              link: '/detail/1097',
            },
            typeBadge: { text: '콘서트', typeBadge: true },
            title: { text: 'BTS Yet To Come in BUSAN', link: '/detail/1097' },
            heart: {
              heartClicked: false,
              link: '/api/pick/1097?status=',
              id: 1097,
            },
            listItemAdditionalInfo: {
              heartCount: 1,
              grade: 0,
              archiveCount: 0,
            },
          },
          {
            id: 1094,
            presentationImage: {
              url: 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-03/180454-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.jpg',
              link: '/detail/1094',
            },
            typeBadge: { text: '뮤직페스티벌', typeBadge: true },
            title: { text: '2022 춘천 팸팸 페스타', link: '/detail/1094' },
            heart: {
              heartClicked: false,
              link: '/api/pick/1094?status=',
              id: 1094,
            },
            listItemAdditionalInfo: {
              heartCount: 0,
              grade: 0,
              archiveCount: 0,
            },
          },
          {
            id: 1083,
            presentationImage: {
              url: 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213102-r.png',
              link: '/detail/1083',
            },
            typeBadge: { text: '전시회', typeBadge: true },
            title: {
              text: 'MMCA 이건희컬렉션 특별전 : 이중섭',
              link: '/detail/1083',
            },
            heart: {
              heartClicked: false,
              link: '/api/pick/1083?status=',
              id: 1083,
            },
            listItemAdditionalInfo: {
              heartCount: 2,
              grade: 4.5,
              archiveCount: 2,
            },
          },
          {
            id: 1064,
            presentationImage: {
              url: 'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-08-07/064132-ttt.jpg',
              link: '/detail/1064',
            },
            typeBadge: { text: '전시회', typeBadge: true },
            title: {
              text: '2022 아시아프 & 히든아티스트 페스티벌',
              link: '/detail/1064',
            },
            heart: {
              heartClicked: true,
              link: '/api/pick/1064?status=',
              id: 1064,
            },
            listItemAdditionalInfo: {
              heartCount: 18,
              grade: 4,
              archiveCount: 2,
            },
          },
        ],
      },
    },
  ];
};

export const useResetHomeModulesFunction = () =>
  useRecoilCallback(
    ({ set }) =>
      async () => {
        const homeModuleData = await getHomeInfo();
        set(homeModuleState, homeModuleData);
        homeModuleData.forEach((_, index) =>
          set(
            homeModuleIndivisualStateFamily(index),
            getFromModuledata(homeModuleData[index]),
          ),
        );
      },
    [],
  );

export const getFromModuledata = ({ moduleName, data }: ModuleData) => {
  switch (moduleName) {
    case 'monthly-free-item':
      const { contents } = data as MonthlyFreeItemProps;
      return contents;
    default:
      return null;
  }
};

export const useTurnPickstateFunction = (moduleId: number, itemId: number) =>
  useRecoilCallback(
    ({ set }) =>
      async () => {
        set(
          homeModuleIndivisualStateFamily(moduleId),
          (exHomeindivisualState) => {
            const monthlyData =
              exHomeindivisualState as MonthlyFreeItemCardProps[];
            return monthlyData.map((it: MonthlyFreeItemCardProps) => {
              if (it.heart.id === itemId) {
                return {
                  ...it,
                  heart: { ...it.heart, heartClicked: !it.heart.heartClicked },
                };
              } else {
                return it;
              }
            });
          },
        );
      },
    [],
  );

export const homeModuleIndivisualStateFamily = atomFamily({
  key: 'home-module-indivisual',
  default: selectorFamily({
    key: 'home-module-indivisual/Default',
    get:
      (index: number) =>
      ({ get }) =>
        getFromModuledata(get(homeModuleState)[index]),
  }),
});

export const homeModuleState = atom<ModuleData[]>({
  key: 'home-module',
  default: selector({
    key: 'home-module/default',
    get: async () => getHomeInfo(),
  }),
});
