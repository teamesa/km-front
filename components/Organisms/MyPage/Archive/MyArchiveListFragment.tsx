import { useRouter } from 'next/router';

import BlankArchiveListSection from './BlankArchiveListSection';
import ListSection from './ListSection';

import { Box, Button, Layout } from 'components/Atoms';
import theme from 'styles/theme';

export default function MyArchiveListFragment() {
  const router = useRouter();

  return (
    <>
      {/* <Box
        display="block"
        flex-wrap="nowrap"
        overflow="initial"
        position="fixed"
        bottom="50px"
        right="10px"
      >
        <Box
          width="50px"
          height="50px"
          borderRadius="50px"
          backgroundColor={theme.colors.black}
        />
      </Box> */}
      <ListSection />
    </>
    // <BlankArchiveListSection />
  );
}
