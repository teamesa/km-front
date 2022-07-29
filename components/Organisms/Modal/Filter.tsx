import { css } from '@emotion/react';

import { Box, Button, FlexBox, Layout, RadioLabel } from 'components/Atoms';
import { CheckBox } from 'components/Atoms/CheckBox';
import ModalLayout from 'components/Organisms/Modal/ModalLayout';
import { FilterProps } from 'constants/type/modal';
import theme from 'styles/theme';
import { useModal } from 'utils/hooks/useModal';

export default function SelectModal({ payload }: { payload: FilterProps }) {
  const { offModal } = useModal();
  const data = payload?.data ?? [];
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
              {item.type.map((list, index) => (
                <Box
                  key={index}
                  height="20px"
                  marginBottom="20px"
                  flex="0 0 50%"
                >
                  <CheckBox
                    type="checkbox"
                    id={list.value}
                    css={css`
                      margin: 0px !important;
                    `}
                  />
                  <RadioLabel
                    htmlFor={list.value}
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
            margin="0px 2.5px"
            width="50%"
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
            margin="0px 2.5px"
            width="50%"
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
        <Box width="100%" height="var(--platformBottomArea)" />
      </Layout>
    </ModalLayout>
  );
}
