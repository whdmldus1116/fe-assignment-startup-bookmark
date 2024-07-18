import styled from 'styled-components';

export const SubmitBtnStyle = styled.button<{ location: string }>`
  width: 320px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--active-button-color);
  color: #fefefe;
  border: none;
  cursor: pointer;

  ${({ location }) =>
    location === 'next' &&
    `
      @media (max-width: 768px) {
        position: fixed;
        bottom: 20px;
        width: calc(100% - 40px); // 화면 양쪽에 20px 여백을 주기 위해
        left: 20px;
      }
    `}
`;

export const GoToSignUpBtnStyle = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 5px;
  background-color: #fefefe;
  border: 1px solid var(--active-button-color);
  color: var(--active-button-color);
  margin-top: 10px;
  cursor: pointer;
`;
