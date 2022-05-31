import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';

type TGetTest = {
  responsePagingStatus: {
    nextPage: number;
    currentPage: number;
    pageSize: number;
    hasNext: boolean;
    totalContentsCount: number;
    currentContentsCount: number;
  };
  contents: {
    presentationImage: {
      url: string;
      link: string;
      backgroundText: string;
      dimColor: string;
      opacity: number;
      dimTarget: boolean;
    };
    typeBadge: {
      text: string;
      typeBadge: boolean;
    };
    additionalBadgeList: {
      text: string;
      typeBadge: boolean;
    }[];
    title: {
      text: string;
      link: string;
    };
    heart: {
      heartClicked: boolean;
      link: string;
    };
    listItemAdditionalInfo: {
      heartCount: number;
      grade: number;
      archiveCount: number;
    };
  }[];
};

export default atom({
  key: 'TestSate',
  default: selector({
    key: 'TestSate/default',
    get: async () => {
      const axios = customAxios();
      const { data } = (await axios({
        url: `/hello-example`,
        method: 'GET',
      })) as AxiosResponse<TGetTest>;

      return data;
    },
  }),
});
