import { useState } from 'react';
import { Container, StyledTextInput, ErrorIcon, ErrorMessage } from './styles';

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

export default AuthInput;
