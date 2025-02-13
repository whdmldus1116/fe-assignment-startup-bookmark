import { ChangeEvent, forwardRef, useRef, useState, Ref } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange: ({ value }: { [x: string]: any; value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  isPhoneNumber?: boolean;
  nextRef?: Ref<HTMLInputElement>;
};

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      type,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      value = '',
      disabled = false,
      isPhoneNumber = false,
      nextRef,
    },
    ref,
  ) => {
    const [text, setText] = useState(value);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      let value = ev.target.value;
      if (isPhoneNumber) {
        value = formatPhoneNumber(value);
      }
      setText(value);
      onChange({ value });
    };

    const formatPhoneNumber = (phoneNumber: string) => {
      const cleaned = phoneNumber.replace(/\D/g, '');
      const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);
      if (match) {
        return `${match[1]}${match[2] ? '-' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
      }
      return phoneNumber;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && nextRef) {
        e.preventDefault();
        (nextRef as React.RefObject<HTMLInputElement>).current?.focus();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    return (
      <StyledInput
        ref={ref as Ref<HTMLInputElement>}
        type={type}
        value={text}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
    );
  },
);

const resetInputStyles = `
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
`;

const StyledInput = styled.input`
  ${resetInputStyles}

  width: 295px;
  height: 25px;
  padding: 12px;
  border: 1px solid var(--default-border-color);
  border-radius: 4px;
  color: black;
  &::placeholder {
    color: var(--default-border-color);
  }
  &:focus {
    border-color: var(--focus-border-color);
    color: black;
  }
`;

export default TextInput;
