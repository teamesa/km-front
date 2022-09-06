export type moduleNames = 'swipe-item' | 'monthly-free-item';

export type ModuleData = {
  moduleName: moduleNames;
  data: any;
};

export type SwipeItemProps = {
  thumbnailPhotoUrl: string;
  photoUrls: string[];
  title: {
    text: string;
    link: string;
  };
  content: {
    text: string;
    link: string;
  };
  keywords: string[];
};

export type MonthlyFreeItemProps = {
  topTitle?: string;
  bottomTitle?: string;
  contents: {
    id: number;
    presentationImage: {
      url: string;
      link: string;
    };
    title: {
      text: string;
      link: string;
    };
    listItemAdditionalInfo: {
      archiveCount: number;
      grade: number;
      heartCount: number;
    };
    heart: { heartClicked: boolean; id: number; link: string };
    typeBadge: { text: string; typeBadge: boolean };
  }[];
};
