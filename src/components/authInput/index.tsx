import { useState, forwardRef, Ref, useEffect } from 'react';
import { Container, StyledTextInput, ErrorIcon, ErrorMessage, StyledPasswordInput } from './styles';

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
  errorType?: 'low' | 'medium' | 'high' | '';
  errorMessage?: string;
  isTel?: boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

const AuthInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      type,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      value = '',
      disabled = false,
      error = false,
      errorType,
      errorMessage = '',
      isTel = false,
      onKeyDown,
    }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [text, setText] = useState(value);

    const handleChange = ({ value }: { value: string }) => {
      setText(value);
      onChange({ value });
    };

    const getTextColor = (error?: boolean, errorType?: 'low' | 'medium' | 'high' | '') => {
      if (error) {
        return 'var(--error-color)';
      }
      if (errorType) {
        const colorMap: { [key: string]: string } = {
          low: 'var(--error-color)',
          medium: 'var(--medium-password-color)',
          high: 'var(--focus-border-color)',
        };

        return colorMap[errorType] || 'var(--focus-border-color)';
      }
      return 'var(--focus-border-color)';
    };

    return (
      <Container>
        {className === 'password' ? (
          <>
            <StyledPasswordInput
              ref={ref}
              className={className}
              type={type}
              placeholder={placeholder}
              onChange={({ value }) => handleChange({ value })}
              onFocus={onFocus}
              onBlur={onBlur}
              value={text}
              disabled={disabled}
              error={error}
            />
            {error && <ErrorIcon src="/src/assets/error.png" />}
            <ErrorMessage error={error} textColor={getTextColor(error, errorType)}>
              {error || errorType ? errorMessage : ''}
            </ErrorMessage>
          </>
        ) : (
          <>
            <StyledTextInput
              ref={ref}
              type={type}
              placeholder={placeholder}
              onChange={({ value }) => handleChange({ value })}
              onFocus={onFocus}
              onBlur={onBlur}
              value={text}
              disabled={disabled}
              error={error as boolean}
              isPhoneNumber={isTel}
              onKeyDown={onKeyDown}
            />
            {error && <ErrorIcon src="/src/assets/error.png" />}
            <ErrorMessage error={error} textColor={getTextColor(error)}>
              {error ? errorMessage : ''}
            </ErrorMessage>
          </>
        )}
      </Container>
    );
  },
);

export default AuthInput;
