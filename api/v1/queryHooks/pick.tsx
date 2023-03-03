import { useMutation } from '@tanstack/react-query';

import { putPick } from 'api/v1/pick';

export default function usePickQuery() {
  function usePutPick() {
    return useMutation(putPick, {});
  }

  return { usePutPick };
}
