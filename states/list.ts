import { atom } from 'recoil';

import { data } from 'components/Organisms/List/data';

export default atom({
  key: 'ListState',
  default: data,
});
