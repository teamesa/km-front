import { useRouter } from 'next/router';
import { createRef } from 'react';

import Archive from 'components/Organisms/Detail/Description/Archive';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import { DescriptionNavigation } from 'components/Organisms/Detail/DetailNavigation';
import { useItems } from 'api/v1/hooks/items';
import { useArchive } from 'api/v1/hooks/archive';

export default function Description() {
  const router = useRouter();
  const archiveRef = createRef<HTMLDivElement>();
  const introduceRef = createRef<HTMLDivElement>();

  const { useGetItmesDetailById } = useItems();
  const { data: getItmesDetail } = useGetItmesDetailById(
    Number(router.query.id),
  );

  const { useGetArchivesById } = useArchive();
  const { data: getArchives } = useGetArchivesById({
    id: Number(router.query.id),
    sortType: 'MODIFY_DESC',
  });

  const tabViewData =
    getItmesDetail?.data.summary === null &&
    getItmesDetail?.data.photo.length === 0
      ? [{ ...getArchives?.data }]
      : [
          { contents: { ...getItmesDetail?.data }, title: '소개' },
          { ...getArchives?.data },
        ];

  return (
    <>
      <DescriptionNavigation
        deatailMetaInfo={tabViewData}
        archiveRef={archiveRef}
        introduceRef={introduceRef}
      />
      {tabViewData.map((data) =>
        data.title === '아카이브' ? (
          <Archive
            key={data.title}
            data={data.contents}
            scrollRef={archiveRef}
            introYn={tabViewData.length}
          />
        ) : data.title === '소개' ? (
          <Introduce
            key={data.title}
            data={data.contents}
            scrollRef={introduceRef}
          />
        ) : (
          <div />
        ),
      )}
    </>
  );
}
