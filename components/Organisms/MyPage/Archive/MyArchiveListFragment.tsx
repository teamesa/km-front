import { useRouter } from 'next/router';

import BlankArchiveListSection from './BlankArchiveListSection';
import ListSection from './ListSection';

import { Box, Button, Layout } from 'components/Atoms';
import theme from 'styles/theme';

export default function MyArchiveListFragment() {
  const router = useRouter();

  return (
    <>
      <ListSection />
    </>
    // <BlankArchiveListSection />
  );
}
