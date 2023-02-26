import { useRouter } from 'next/router';
import { createRef } from 'react';
import { useRecoilValue } from 'recoil';

import Archive from 'components/Organisms/Detail/Description/Archive';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import { DescriptionNavigation } from 'components/Organisms/Detail/DetailNavigation';
import { detailState } from 'states/detail';

export default function Description() {
  const router = useRouter();
  const archiveRef = createRef<HTMLDivElement>();
  const introduceRef = createRef<HTMLDivElement>();
  const contents = useRecoilValue(detailState(Number(router.query.id)));
  const tabViewData = contents?.tabViewData;

  return (
    <>
      <DescriptionNavigation
        deatailMetaInfo={tabViewData}
        archiveRef={archiveRef}
        introduceRef={introduceRef}
      />
      {tabViewData?.map(
        ({ title, contents }: { title: string; contents: any }) =>
          title === '아카이브' ? (
            <Archive
              key={title}
              data={contents}
              scrollRef={archiveRef}
              introYn={tabViewData.length}
            />
          ) : title === '소개' ? (
            <Introduce key={title} data={contents} scrollRef={introduceRef} />
          ) : (
            <div />
          ),
      )}
    </>
  );
}