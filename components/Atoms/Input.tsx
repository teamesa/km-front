import styled from '@emotion/styled';

export const Input = styled.input`
  padding: 12px 15px 11px 15px;
  border: solid 1px #ddd;
  background-color: #fff;
  width: 100%;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  object-fit: contain;
  color: #ddd;
  appearance: none;
  border-radius: 50%;
  border: 2px solid #ddd;
  padding: 4px;
  background-color: #ddd;
  background-clip: content-box;
  &:checked {
    appearance: none;
    padding: 0px;
    background-color: #fff;
    border: 6px solid #000;
    border-radius: 50%;
  }
`;
