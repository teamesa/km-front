import { useRouter } from 'next/router';

import ListSection from './ArchiveListSection';
import BlankArchiveListSection from './BlankArchiveListSection';

import { Box, Button, Layout } from 'components/Atoms';
import theme from 'styles/theme';

export default function MyArchiveListFragment() {
  const router = useRouter();

  return (
    <>
      <div></div>

      <ListSection />
    </>
    // <BlankArchiveListSection />
  );
}
