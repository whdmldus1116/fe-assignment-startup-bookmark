import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  z-index: 100;

  padding: 22px;

  width: 380px;
  height: 400px;
  border-radius: 16px 16px 0 0;
  background-color: #ffffff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const PopupTitle = styled.span`
  color: var(--label-text-color);
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
`;

export const PopupContent = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 16px 16px 0 0;
`;

export const CheckboxContainer = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const CheckboxLabel = styled.label`
  display: block;
  font-size: 14px;
  line-height: 20px;
  margin-left: 7px;
  color: var(--input-text-color);
`;

export const InfoText = styled.span`
  display: flex;
  margin-left: 20px;
  font-size: 12px;
  line-height: 18px;

  color: var(--placeholder-color);
`;

export const BlueText = styled.span`
  color: var(--active-button-color);
`;
