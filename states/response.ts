import { atom } from 'recoil';

interface TResponse {
  data: {
    memo: string;
  };
}

/** POST로 보낼때 사용 */
export default atom<TResponse | undefined>({
  key: 'responseState',
  default: undefined,
});
