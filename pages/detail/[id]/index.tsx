import Description from 'components/Organisms/Detail/Description';
import ExhibitionImagesSection from 'components/Organisms/Detail/ExhibitionImagesSection';
import Navigator from 'components/Organisms/Detail/Navigator';
import { useInitHeader } from 'utils/hooks/useInitHeader';

export default function Detail() {
  useInitHeader({ headerLeft: 'default', headerEnd: 'home' });

  return (
    <>
      <ExhibitionImagesSection />
      <Description />
      <Navigator />
    </>
  );
}
