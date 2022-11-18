import { AtomEffect } from 'recoil';

const store = typeof window !== 'undefined' ? window.localStorage : null;

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (store) {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue)); //아톰 만들기
      }

      //로컬스토리지에 셋팅
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export default localStorageEffect;
