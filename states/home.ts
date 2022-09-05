import axios from 'axios';
import { selector, atom, useRecoilCallback } from 'recoil';

import { ModuleData } from 'components/Organisms/Home/ModuleTypes';

export const getHomeInfo = async (): Promise<ModuleData[]> => {
  const _ = await axios({
    url: `/api/item/detail/${1099}`,
    method: 'GET',
  });

  return [
    {
      moduleName: 'swipe-item',
      data: {
        thumbnailPhotoUrl:
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
        photoUrls: [
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
        ],
        title: {
          text: '영국 현대미술의 거장 : 마이클 크레이그 마틴展 영국 현대미술의 거장 : 마이클 크레이그 마틴展',
          link: '/detail/1099',
        },
        content: {
          text: '마이클 크레이그 마틴, 선과 색으로 개념을그리다. 마이클 크레이그 마틴의 초기작 ‘참나무 (An Oak Tree 1973)’ 작품은 변기를 미술전에 출품한 마르셀 뒤샹의 바톤을 이어받아, 당시 미술계에 파격적인이슈가 됩니다. 갤러리 벽면에 ‘선반과 물 한 잔을 올려놓고 물컵이 아닌... 참나무라고명명한이작품은 개념미술사의중요한전환점이됩니다.',
          link: '/detail/1099',
        },
        keywords: ['#전시회', '#한가람미술관'],
      },
    },
    {
      moduleName: 'swipe-item',
      data: {
        thumbnailPhotoUrl:
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
        photoUrls: [
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
          'https://kilometer-image.s3.ap-northeast-2.amazonaws.com/static/bo/2022-09-01/213104-8934b4282f1f93269a2b79cf929167b8_skdf.png',
        ],
        title: {
          text: '영국 현대미술의 거장 : 마이클 크레이그 마틴展 영국 현대미술의 거장 : 마이클 크레이그 마틴展',
          link: '/detail/1099',
        },
        content: {
          text: '마이클 크레이그 마틴, 선과 색으로 개념을그리다. 마이클 크레이그 마틴의 초기작 ‘참나무 (An Oak Tree 1973)’ 작품은 변기를 미술전에 출품한 마르셀 뒤샹의 바톤을 이어받아, 당시 미술계에 파격적인이슈가 됩니다. 갤러리 벽면에 ‘선반과 물 한 잔을 올려놓고 물컵이 아닌... 참나무라고명명한이작품은 개념미술사의중요한전환점이됩니다.',
          link: '/detail/1099',
        },
        keywords: ['#전시회', '#한가람미술관'],
      },
    },
    {
      moduleName: 'monthly-free-item',
      data: {
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
      },
    [],
  );

export const homeModuleState = atom<ModuleData[]>({
  key: 'home-module',
  default: selector({
    key: 'home-module/default',
    get: async () => getHomeInfo(),
  }),
});
