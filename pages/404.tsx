import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Error404() {
  useInitHeader({ headerLeft: 'disabled', headerRight: 'disabled' });
  return <div>에러페이지</div>;
}
