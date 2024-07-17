import styled from 'styled-components';

export const SubmitBtnStyle = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 5px;
  background-color: #006eff;
  color: #fefefe;
  border: none;
  margin-top: 24px;
  cursor: pointer;
`;

export const GoToSignUpBtnStyle = styled(SubmitBtnStyle)`
  background-color: #fefefe;
  border: 1px solid #006eff;
  color: #006eff;
`;
