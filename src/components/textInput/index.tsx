import { ChangeEvent, forwardRef, useRef, useState, Ref } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
  isPhoneNumber?: boolean;
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
      value = '',
      disabled = false,
      isPhoneNumber = false,
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
        disabled={disabled}
      />
    );
  },
);

const StyledInput = styled.input`
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
