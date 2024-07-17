import { ChangeEvent, forwardRef, useRef, useState, Ref } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
};

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ className, placeholder, onChange, onFocus, onBlur, value = '', disabled = false }, ref) => {
    const [text, setText] = useState(value);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value;
      setText(value);
      onChange({ value });
    };

    return (
      <StyledInput
        ref={ref as Ref<HTMLInputElement>}
        type="text"
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
