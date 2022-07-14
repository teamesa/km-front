import { type } from 'os';

import { css } from '@emotion/react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Box, Button, FlexBox, Layout, RadioLabel } from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import { FilterProps } from 'constants/type/modal';
import { ListState, searchRequest } from 'states';
import { getList } from 'states/list';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal({ payload }: { payload: FilterProps }) {
  const { offModal } = useModal();
  const data = payload?.data ?? [];

  const [searchRequestBody, setSearchRequest] = useRecoilState(searchRequest);
  const makeNewTypeArray = (
    exValue: string[],
    value: string,
    checked: boolean,
  ): [] | string[] => {
    if (checked) {
      return [...exValue, value];
    } else {
      return exValue.filter((it) => it !== value);
    }
  };
  const makeNewFilterState = (
    type: string,
    value: string,
    checked: boolean,
  ) => {
    switch (type) {
      case 'progressTypes':
        return {
          ...searchRequestBody,
          filterOptions: {
            ...searchRequestBody.filterOptions,
            progressTypes: makeNewTypeArray(
              searchRequestBody.filterOptions.progressTypes,
              value,
              checked,
            ),
          },
        };
      case 'feeTypes':
        return {
          ...searchRequestBody,
          filterOptions: {
            ...searchRequestBody.filterOptions,
            feeTypes: makeNewTypeArray(
              searchRequestBody.filterOptions.feeTypes,
              value,
              checked,
            ),
          },
        };
      case 'regionTypes':
        return {
          ...searchRequestBody,
          filterOptions: {
            ...searchRequestBody.filterOptions,
            regionTypes: makeNewTypeArray(
              searchRequestBody.filterOptions.regionTypes,
              value,
              checked,
            ),
          },
        };
      default:
        return searchRequestBody;
    }
  };

  const setFilterList = async (
    value: string,
    checked: boolean,
    type: string,
  ) => {
    const newState = makeNewFilterState(type, value, checked);
    console.log(newState);
    setSearchRequest(newState);
  };

  return (
    <ModalLayout>
      <Layout overflow="auto" height="auto">
        {data.map((item, index) => (
          <Box
            key={index}
            marginBottom="20px"
            css={css`
              &:nth-last-of-type(1) {
                margin-bottom: 10px;
              }
            `}
          >
            <Box
              marginBottom="20px"
              fontSize="15px"
              fontWeight="500"
              lineHeight="19px"
            >
              {item.title}
            </Box>
            <FlexBox flexWrap="wrap">
              {item.list.map((list) => (
                <Box
                  key={list.index}
                  height="20px"
                  marginBottom="20px"
                  flex="0 0 50%"
                >
                  <CheckBox
                    type="checkbox"
                    id={`filter${list.type}${list.index}`}
                    value={`filter${list.type}${list.index}`}
                    css={css`
                      margin: 0px !important;
                    `}
                    // checked={searchRequestBody.filterOptions[
                    //   `${list.type}`
                    // ].filter((it,index) => it.index)}
                    onChange={(e) => {
                      setFilterList(list.value, e.target.checked, list.type);
                    }}
                  />
                  <RadioLabel
                    htmlFor={`filter${list.type}${list.index}`}
                    css={css`
                      margin: 0px 0px 0px 10px !important;
                      color: ${theme.colors.gray99};
                      font-size: 13px;
                      line-height: 20px;
                      font-weight: 500;
                    `}
                  >
                    {list.label}
                  </RadioLabel>
                </Box>
              ))}
            </FlexBox>
          </Box>
        ))}

        <FlexBox margin="0px -2.5px">
          <Button
            width="170px"
            margin="0px 2.5px"
            fontSize="16px"
            lineHeight="50px"
            fontWeight="500"
            border={`1px solid ${theme.colors.grayAA}`}
            onClick={() => {
              // payload.onChange &&
              //   payload.onChange({
              //     target: { value: item.value },
              //   });
              offModal();
            }}
          >
            초기화
          </Button>
          <Button
            width="170px"
            margin="0px 2.5px"
            color={theme.colors.white}
            fontSize="16px"
            lineHeight="50px"
            fontWeight="500"
            backgroundColor={theme.colors.black}
            onClick={() => {
              // payload.onChange &&
              //   payload.onChange({
              //     target: { value: item.value },
              //   });
              offModal();
            }}
          >
            적용
          </Button>
        </FlexBox>
      </Layout>
    </ModalLayout>
  );
}
