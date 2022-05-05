import { useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export const getServerSideProps = useUserProps;
export default function Error404() {
  useInitHeader({ headerLeft: 'disabled', headerRight: 'disabled' });
  return <div>에러페이지</div>;
}
