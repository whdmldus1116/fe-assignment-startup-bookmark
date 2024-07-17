import styled from 'styled-components';

export const DropUpContainer = styled.div`
  margin: 300px;
  position: relative;
  width: 320px;
`;

const commonInputStyles = `
  width: 280px;
  height: 48px;
  padding: 0 30px 0 15px;
  border: 1px solid var(--default-border-color);
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  ${commonInputStyles}
  color: var(--input-text-color);

  &::placeholder {
    color: var(--placeholder-color);
  }

  &:focus {
    border-color: var(--focus-border-color);
  }
`;

export const SelectedOptionsContainer = styled.div`
  ${commonInputStyles}
  flex-wrap: wrap;
  gap: 5px;
  min-height: 48px;
`;

export const SelectedOption = styled.span`
  background-color: var(--tag-label-color);
  color: var(--tag-text-color);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

export const DropUpButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const OptionList = styled.ul`
  position: absolute;
  top: auto;
  bottom: 100%;
  left: 0;
  width: 320px;
  background-color: white;
  border: 1px solid var(--default-border-color);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  list-style: none;
  padding: 0;
  margin: 0 0 5px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export const OptionItem = styled.li`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--Divider-color);

  &:last-child {
    border-bottom: none;
  }
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid var(--default-border-color);
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: var(--active-button-color);
    border-color: var(--active-button-color);
    position: relative;

    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 14px;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 14px;
  color: var(--label-text-color);
`;
