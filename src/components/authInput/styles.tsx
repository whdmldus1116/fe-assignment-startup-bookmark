import TextInput from 'components/textInput';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTextInput = styled(TextInput)<{ error: boolean }>`
  border-color: ${(props) => (props.error ? 'var(--error-color)' : 'var(--default-border-color)')};
  &:focus {
    border-color: ${(props) => (props.error ? 'var(--error-color)' : 'var(--focus-border-color)')};
  }
`;

export const ErrorIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
`;

export const ErrorMessage = styled.div<{ error: boolean; textColor: string }>`
  color: ${(props) => (props.error ? 'var(--error-color)' : props.textColor)};
  font-size: 12px;
  margin-top: 5px;
`;
