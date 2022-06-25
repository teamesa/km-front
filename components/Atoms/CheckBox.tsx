import styled from '@emotion/styled';

import Input from './Input';

export const CheckBox = styled(Input)`
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border: 2px solid var(--grey-200);
  border-radius: 2px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23fff; %7D .cls-1, .cls-2 %7B stroke: %23ddd; %7D .cls-2, .cls-4 %7B fill: none; %7D .cls-2 %7B stroke-linecap: square; stroke-width: 2px; %7D .cls-3 %7B stroke: none; %7D %3C/style%3E%3C/defs%3E%3Cg id='_check' data-name='*check' transform='translate(6 -4)'%3E%3Cg id='사각형_1583' data-name='사각형 1583' class='cls-1' transform='translate(-6 4)'%3E%3Crect class='cls-3' width='20' height='20'/%3E%3Crect class='cls-4' x='0.5' y='0.5' width='19' height='19'/%3E%3C/g%3E%3Cpath id='패스_757' data-name='패스 757' class='cls-2' d='M123.336,1669.4l3.768,3.543,6.334-6.478' transform='translate(-123.836 -1655.961)'/%3E%3C/g%3E%3C/svg%3E%0A");
  outline: none;

  :checked {
    border: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: none; stroke: %23ceff00; stroke-linecap: square; stroke-width: 2px; %7D %3C/style%3E%3C/defs%3E%3Cg id='_check' data-name='*check' transform='translate(6 -4)'%3E%3Crect id='사각형_1583' data-name='사각형 1583' width='20' height='20' transform='translate(-6 4)'/%3E%3Cpath id='패스_757' data-name='패스 757' class='cls-1' d='M123.336,1669.4l3.768,3.543,6.334-6.478' transform='translate(-123.836 -1655.961)'/%3E%3C/g%3E%3C/svg%3E%0A");
  }
`;
