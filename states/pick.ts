import { atom } from 'recoil';

import { data } from 'components/Organisms/Pick/data';

export default atom({
  key: 'PickState',
  default: data,
});
