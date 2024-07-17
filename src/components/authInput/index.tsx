import { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../textInput';

type Props = {
  className?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  textColor?: string;
};

const AuthInput = ({
  className,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  value = '',
  disabled = false,
  error = false,
  errorMessage = '',
  textColor = 'var(--focus-border-color)',
}: Props) => {
  const [text, setText] = useState(value);

  const handleChange = ({ value }: { value: string }) => {
    setText(value);
    onChange({ value });
  };

  return (
    <Container>
      <StyledTextInput
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={text}
        disabled={disabled}
        error={error}
      />
      {error && <ErrorIcon src="/src/assets/20.png" />}
      <ErrorMessage error={error} textColor={textColor}>
        {error ? errorMessage : ''}
      </ErrorMessage>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTextInput = styled(TextInput)<{ error: boolean }>`
  border-color: ${(props) => (props.error ? 'var(--error-color)' : 'var(--default-border-color)')};
  &:focus {
    border-color: ${(props) => (props.error ? 'var(--error-color)' : 'var(--focus-border-color)')};
  }
`;

const ErrorIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
`;

const ErrorMessage = styled.div<{ error: boolean; textColor: string }>`
  color: ${(props) => (props.error ? 'var(--error-color)' : props.textColor)};
  font-size: 12px;
  margin-top: 5px;
`;

export default AuthInput;
