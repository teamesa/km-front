import { Layout } from 'components/Atoms';
import Item from 'components/Organisms/List/Item';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function List() {
  useInitHeader({ headerRight: 'search' });

  return (
    <Layout>
      <Item />
      <Item />
      <Item />
      <Item />
    </Layout>
  );
}
