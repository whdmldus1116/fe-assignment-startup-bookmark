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
      /* TODO: 릴리 도와주세요 ㅜㅜ
       * 회원가입 폼 컴포넌트에서 전화번호 입력 시에는 '-'이 들어간 string을 value로 전달해주는데,
       * 여기서 value를 다시 e.target.value로 받아서 setText(value)를 하면 숫자만 value로 설정되느라 '-'이 사라지는 것 같습니다ㅠㅠㅠ
       * 어떻게 수정해야 할지 모르겠어요 ,,,
       * */

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
