export interface DetailResponse {
  photo: string[];
  summary: string;
}

export interface LinkInfo {
  link: string;
  title: string;
}
export interface ItemHeart {
  heartClicked: boolean;
  id: number;
  link: string;
}
export interface ItemInfoAdditionalInfo {
  archiveLink: LinkInfo;
  heart: ItemHeart;
  heartCount: number;
}

export interface ItemInfoResponse {
  detailImageUrl: string;
  feeType: string;
  homePageUrl: string;
  itemInfoAdditionalInfo: ItemInfoAdditionalInfo;
  lat: number;
  listImageUrl: string;
  lng: number;
  photo: string[];
  place: string;
  price: string;
  summary: string;
  term: string;
  ticketUrl: string;
  time: string;
  title: string;
  type: string;
  source: string;
}

export interface SummaryResponse {
  archiveId: number;
  archiveWritten: boolean;
  listImageUrl: string;
  title: string;
}

export interface ArchiveLike {
  heartClicked: boolean;
  link: string;
}

export interface ArchiveInfo {
  cafe: string;
  comment: string;
  food: string;
  heart: ArchiveLike;
  id: number;
  likeCount: number;
  photoUrls: string[];
  starRating: number;
  updatedAt: string;
  userName: string;
  userProfileUrl: string;
}

interface ResponsePagingStatus {
  currentContentsCount: number;
  currentPage: number;
  hasNext: boolean;
  nextPage: number;
  pageSize: number;
  query: string;
  totalContentsCount: number;
}

interface ArchiveResponse {
  archives: ArchiveInfo;
  avgStarRating: number;
  responsePagingStatus: ResponsePagingStatus;
}

export interface GeneralResponseArchiveResponse {
  contents: ArchiveResponse;
  title: string;
}

export interface LikeResponse {
  content: boolean;
}

export interface PickResponse {
  content: boolean;
}

interface PlaceInfo {
  address: string;
  name: string;
  placeType: string;
  roadAddress: string;
}

export interface ArchiveRequest {
  comment: string;
  itemId?: number;
  photoUrls: string[];
  placeInfos: PlaceInfo[];
  starRating: number;
  visibleAtItem: boolean;
}

export interface AutoCompleteItem {
  id: number;
  link: string;
  searchedTextLocationEnd: number;
  searchedTextLocationStart: number;
  title: string;
}

interface ResponsePagingStatus {
  currentContentsCount: number;
  currentPage: number;
  hasNext: boolean;
  nextPage: number;
  pageSize: number;
  query: string;
  totalContentsCount: number;
}
export interface AutoCompleteResult {
  contents: AutoCompleteItem[];
  responsePagingStatus: ResponsePagingStatus;
}
