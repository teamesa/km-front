import { atom } from 'recoil';

import { data } from 'components/Organisms/Search/data';

export default atom({
  key: 'PickRankingState',
  default: data,
});
