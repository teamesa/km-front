import { PresentationBadge } from './myArchiveList';
export interface MyArchiveDetailProps {
  typeBadge: PresentationBadge;
  updatedAt: string;
  title: string;
  comment: string;
  starRating: number;
  food: string;
  cafe: string;
  photoUrls: string[];
  archiveAdditionalInfos: ArchiveDetailLinkInfos[];
}

export interface ArchiveDetailLinkInfos {
  title: string;
  link: string;
}
