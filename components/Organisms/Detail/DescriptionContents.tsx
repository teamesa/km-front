import { useRouter } from 'next/router';
import { createRef } from 'react';

import { useArchiveQuery } from 'api/v1/queryHooks/archive';
import { useItemsQuery } from 'api/v1/queryHooks/items';
import Archive from 'components/Organisms/Detail/Description/Archive';
import Introduce from 'components/Organisms/Detail/Description/Introduce';
import { DescriptionNavigation } from 'components/Organisms/Detail/DetailNavigation';
import { Box } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';
import theme from 'styles/theme';

export default function Description() {
  const router = useRouter();
  const archiveRef = createRef<HTMLDivElement>();
  const introduceRef = createRef<HTMLDivElement>();

  const { useGetItmesDetailById, useGetItemsById } = useItemsQuery();
  const { data: getItmesDetail } = useGetItmesDetailById(
    Number(router.query.id),
  );
  const { data: getItems } = useGetItemsById(Number(router.query.id));

  const { useGetItemsArchivesById } = useArchiveQuery();
  const { data: getItemsArchives } = useGetItemsArchivesById({
    id: Number(router.query.id),
    sortType: 'MODIFY_DESC',
  });
  const source = getItems?.data.source;

  const tabViewData =
    (getItmesDetail?.data.summary === '' ||
      getItmesDetail?.data.summary === null) &&
    getItmesDetail?.data.photo.length === 0 &&
    source === undefined
      ? [{ ...getItemsArchives?.data }]
      : [
          { contents: { ...getItmesDetail?.data, source }, title: '소개' },
          { ...getItemsArchives?.data },
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
          <>
            <Introduce
              key={data.title}
              data={data.contents}
              scrollRef={introduceRef}
            />
            {source && (
              <>
                <Box
                  fontSize="11px"
                  color={theme.colors.gray99}
                  paddingTop="20px"
                >
                  [출처]
                </Box>
                <Box
                  fontSize="11px"
                  color={theme.colors.gray99}
                  paddingTop="4px"
                >
                  <InnerHTML data={source} />
                </Box>
              </>
            )}
          </>
        ) : (
          <div />
        ),
      )}
    </>
  );
}
