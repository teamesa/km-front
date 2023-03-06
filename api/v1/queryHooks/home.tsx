import { useQuery } from '@tanstack/react-query';
import { getHome } from 'api/v1/home';
import {
  ModuleData,
  MonthlyFreeItemProps,
  RealTimeArchiveItemProps,
} from 'components/Organisms/Home/ModuleTypes';

export function useHomeQuery() {
  function useGetHome() {
    return useQuery(['get', 'home', 'me'], getHome, {
      select: (data) => {
        return data.data.modules;
      },
      onError: (e) => {
        return [];
      },
    });
  }

  function useGetHomeIndex(index: number): any {
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
    const { data: getHome } = useGetHome();
    return getHome && getFromModuleData(getHome[index]);
  }

  return {
    useGetHome,
    useGetHomeIndex,
  };
}
