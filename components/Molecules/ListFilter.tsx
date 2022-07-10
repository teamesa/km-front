import { Box } from 'components/Atoms';
import ListOptionFilter from 'components/Organisms/List/ListOptionFilter';
import ListSortFilter from 'components/Organisms/List/ListSortFilter';

export default function ListFilter() {
  return (
    <>
      <Box flex={1}>
        <ListSortFilter />
      </Box>
      <Box flex={1}>
        <ListOptionFilter />
      </Box>
    </>
  );
}
