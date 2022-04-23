import { Box, FlexBox, Layout } from 'components/Atoms';
import { useModal } from 'utils/hooks/useModal';

export default function Description() {
  const { onModal } = useModal();
  return (
    <Box
      borderRadius="24px 24px 0 0"
      position="absolute"
      width="100%"
      height="auto"
      maxHeight="70%"
      minHeight="30%"
      bottom="0px"
      background="white"
      overflow="auto"
      backgroundColor="#000"
    >
      <Box position="relative" height="auto">
        <Layout overflow="auto" height="auto">
          <FlexBox>
            <Box flex={1}>label</Box>
          </FlexBox>
        </Layout>
      </Box>
    </Box>
  );
}
