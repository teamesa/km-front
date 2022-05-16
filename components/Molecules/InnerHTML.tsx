import { Box } from 'components/Atoms';

interface InnerHTMLProps {
  data: string;
}

export default function InnerHTML({ data }: InnerHTMLProps) {
  return <Box dangerouslySetInnerHTML={{ __html: data }} />;
}
