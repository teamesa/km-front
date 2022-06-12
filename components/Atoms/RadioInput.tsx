import styled from '@emotion/styled';
const RadioInput = styled.input`
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
export default RadioInput;
