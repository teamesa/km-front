import { Span } from 'components/Atoms';

interface InnerHTMLProps {
  data: string;
}

export default function InnerHTML({ data }: InnerHTMLProps) {
  return <Span dangerouslySetInnerHTML={{ __html: data }} />;
}
