import axios, { AxiosResponse } from 'axios';
import {
  selector,
  atom,
  useRecoilCallback,
  atomFamily,
  selectorFamily,
} from 'recoil';

import {
  ModuleResponse,
  MonthlyFreeItemCardProps,
} from './../components/Organisms/Home/ModuleTypes';

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
    case 'MONTHLY_FREE_ITEM':
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
