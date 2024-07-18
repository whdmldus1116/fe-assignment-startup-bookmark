import { useState } from 'react';
import { Container, StyledTextInput, ErrorIcon, ErrorMessage } from './styles';

type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  textColor?: string;
  isTel?: boolean;
};

const AuthInput = ({
  className,
  type,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  value = '',
  disabled = false,
  error = false,
  errorMessage = '',
  textColor = 'var(--focus-border-color)',
  isTel = false,
}: Props) => {
  const [text, setText] = useState(value);

  const handleChange = ({ value }: { value: string }) => {
    setText(value);
    onChange({ value });
  };

  // TODO: 비밀번호 에러 메세지 색상 3가지 구분

  return (
    <Container>
      <StyledTextInput
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={text}
        disabled={disabled}
        error={error}
        isPhoneNumber={isTel}
      />
      {error && <ErrorIcon src="/src/assets/error.png" />}
      <ErrorMessage error={error} textColor={textColor}>
        {error ? errorMessage : ''}
      </ErrorMessage>
    </Container>
  );
};

export default AuthInput;
