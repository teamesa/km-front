import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { HeaderBarProps } from 'constants/type/common';
import { headerState } from 'states/common';

export function useInitHeader(header: HeaderBarProps) {
  const setHeaderState = useSetRecoilState(headerState);

  useEffect(() => {
    setHeaderState(header);
  }, [setHeaderState, header]);
}
