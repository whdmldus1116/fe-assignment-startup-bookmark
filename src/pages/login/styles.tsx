import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const ErrorMessage = styled.span`
  color: var(--error-color);
  font-size: 12px;
  margin-top: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 320px;
  background-color: var(--Divider-color);
  margin: 22px 0;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const SubmitBtnWrapper = styled.div`
  margin-top: 16px;
`;

export const SignUpBtnWrapper = styled.div`
  margin-top: 8px;
`;
