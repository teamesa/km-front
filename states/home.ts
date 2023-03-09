import axios, { AxiosResponse } from 'axios';
import {
  selector,
  atom,
  useRecoilCallback,
  atomFamily,
  selectorFamily,
} from 'recoil';

import {
  HomeListProps,
  ModuleResponse,
  MonthlyFreeItemCardProps,
  RealTimeArchiveItemProps,
} from 'components/Organisms/Home/ModuleTypes';
import {
  ModuleData,
  MonthlyFreeItemProps,
} from 'components/Organisms/Home/ModuleTypes';

export const getHomeInfo = async (): Promise<ModuleData[]> => {
  try {
    const response = (await axios({
      url: `/api/home`,
      method: 'GET',
    })) as AxiosResponse<ModuleResponse>;

    return response.data.modules;
  } catch (e) {
    return [];
  }
};

const getSwipeItemInfo = async (): Promise<HomeListProps> => {
  try {
    const response = (await axios({
      url: `/api/home/key-visual`,
      method: 'GET',
    })) as AxiosResponse<HomeListProps>;

    return response.data;
  } catch (e) {
    return {
      data: { keyVisualDatas: [] },
      moduleName: 'KEY_VISUAL',
      index: 0,
    };
  }
};

export const useResetSwipeItemListFunction = () =>
  useRecoilCallback(
    ({ set }) =>
      async () => {
        const homeListInfo = await getSwipeItemInfo();
        set(homeListState, homeListInfo);
      },
    [],
  );

export const useResetHomeModulesFunction = () =>
  useRecoilCallback(
    ({ set }) =>
      async () => {
        const homeModuleData = await getHomeInfo();
        set(homeModuleState, homeModuleData);
        homeModuleData.forEach((_, index) =>
          set(
            homeModuleIndividualStateFamily(index),
            getFromModuleData(homeModuleData[index]),
          ),
        );
      },
    [],
  );

const getFromModuleData = ({ moduleName, data }: ModuleData) => {
  switch (moduleName) {
    case 'MONTHLY_FREE_ITEM':
      const { contents } = data as MonthlyFreeItemProps;
      return contents;
    case 'REAL_TIME_ARCHIVE':
      const { archives } = data as RealTimeArchiveItemProps;
      return archives;
    default:
      return null;
  }
};

export const useTurnPickStateFunction = (moduleId: number, itemId: number) =>
  useRecoilCallback(
    ({ set }) =>
      async () => {
        set(
          homeModuleIndividualStateFamily(moduleId),
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

export const homeModuleIndividualStateFamily = atomFamily({
  key: 'home-module-individual',
  default: selectorFamily({
    key: 'home-module-individual/Default',
    get:
      (index: number) =>
      ({ get }) =>
        getFromModuleData(get(homeModuleState)[index]),
  }),
});

export const homeListState = atom<HomeListProps>({
  key: 'home-list',
  default: selector({
    key: 'home-list/default',
    get: async () => getSwipeItemInfo(),
  }),
});
export const homeModuleState = atom<ModuleData[]>({
  key: 'home-module',
  default: selector({
    key: 'home-module/default',
    get: async () => getHomeInfo(),
  }),
});
