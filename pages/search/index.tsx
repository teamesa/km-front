import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Search() {
  useInitHeader({
    headerRight: 'disabled',
    headerLeft: 'disabled',
    isSearchType: true,
  });
  return <></>;
}
