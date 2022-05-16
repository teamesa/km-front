import { atom } from 'recoil';

import { data } from 'components/Organisms/Detail/data';

export default atom({
  key: 'DetailState',
  default: data,
});
