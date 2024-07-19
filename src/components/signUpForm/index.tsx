import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import AuthInput from '../authInput';
import { SubmitBtn } from '../submitBtn';
import TosPopUp from '../tosPopUp';
import { ValidateInput, validatePhoneNumber } from '../../utils/validateInput';
import DropUp from '../dropUp';

type PasswordValidType = 'high' | 'medium' | 'low' | '';

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    tel: '',
    interestStartups: [] as string[],
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    name: false,
    tel: false,
    interestStartups: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    tel: '',
    interestStartups: '',
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMarketingChecked, setIsMarketingChecked] = useState(false);

  const [passwordValidType, setPasswordValidType] = useState<PasswordValidType>('');

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const interestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleChange = (field: keyof typeof form) => async (value: string | string[]) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));

    let errorMessage = '';
    let valid = true;

    switch (field) {
      case 'name':
        errorMessage = ValidateInput({ type: field, value: value as string });
        valid = !errorMessage;
        break;
      case 'password':
        errorMessage = ValidateInput({ type: 'password', value: value as string });

        if (errorMessage === '비밀번호는 8자리 이상, 15자리 이하로 입력해주세요.') {
          setPasswordValidType('');
          valid = false;
        } else if (errorMessage.includes('높음')) {
          setPasswordValidType('high');
          valid = true;
        } else if (errorMessage.includes('보통')) {
          setPasswordValidType('medium');
          valid = true;
        } else if (errorMessage.includes('낮음')) {
          setPasswordValidType('low');
          valid = false;
        }
        break;
      case 'passwordConfirm':
        if (value === '') {
          break;
        }
        errorMessage = ValidateInput({
          type: 'passwordConfirm',
          value: { password: form.password, passwordConfirm: value as string },
        });
        valid = !errorMessage;
        break;
      case 'tel':
        errorMessage = await validatePhoneNumber(value as string);
        valid = !errorMessage;
        break;
      case 'interestStartups':
        valid = (value as string[]).length > 0;
        errorMessage = valid ? '' : '관심 스타트업 분야를 선택해주세요.';
        break;
      default:
        break;
    }

    setIsValid((prevValid) => ({
      ...prevValid,
      [field]: valid,
    }));

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  const onClickNextBtn = () => {
    const emailErrorMessage = ValidateInput({ type: 'email', value: form.email });
    const nameErrorMessage = ValidateInput({ type: 'name', value: form.name });
    const interestStartupsErrorMessage =
      form.interestStartups.length === 0 ? '관심 스타트업 분야를 선택해주세요.' : '';

    setIsValid({
      ...isValid,
      email: !emailErrorMessage,
      name: !nameErrorMessage,
      interestStartups: !interestStartupsErrorMessage,
    });

    setErrorMessages({
      email: emailErrorMessage,
      name: nameErrorMessage,
      interestStartups: interestStartupsErrorMessage,
      password: errorMessages.password,
      passwordConfirm: errorMessages.passwordConfirm,
      tel: errorMessages.tel,
    });

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      email: emailErrorMessage,
      name: nameErrorMessage,
      interestStartups: interestStartupsErrorMessage,
    }));

    if (!emailErrorMessage && !nameErrorMessage && !interestStartupsErrorMessage) {
      setIsPopupOpen(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, nextRef?: React.RefObject<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      nextRef?.current?.focus();
    }
  };

  const renderLabel = (text: string) => (
    <Label>
      <span>{text}</span>
      <span style={{ color: 'var(--error-color)' }}>*</span>
    </Label>
  );

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <FormContainer>
          {renderLabel('이메일 (아이디)')}
          <AuthInput
            placeholder="이메일을 입력해주세요"
            value={form.email}
            error={!isValid.email && Boolean(errorMessages.email)}
            errorMessage={errorMessages.email}
            onChange={({ value }) => handleChange('email')(value)}
            ref={emailRef}
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
          />

          {renderLabel('비밀번호')}
          <AuthInput
            className="password"
            placeholder="비밀번호를 입력해주세요 (8자리 이상)"
            type="password"
            error={!isValid.password && Boolean(errorMessages.password)}
            errorType={passwordValidType}
            errorMessage={errorMessages.password}
            onChange={({ value }) => {
              handleChange('password')(value);
              handleChange('passwordConfirm')(form.passwordConfirm);
            }}
            ref={passwordRef}
            onKeyDown={(e) => handleKeyDown(e, passwordConfirmRef)}
          />
          <div style={{ height: '5px' }} />
          <AuthInput
            placeholder="다시 한 번 비밀번호를 입력해주세요"
            type="password"
            error={!isValid.passwordConfirm && Boolean(errorMessages.passwordConfirm)}
            errorMessage={errorMessages.passwordConfirm}
            onChange={({ value }) => handleChange('passwordConfirm')(value)}
            ref={passwordConfirmRef}
            onKeyDown={(e) => handleKeyDown(e, nameRef)}
          />

          {renderLabel('이름')}
          <AuthInput
            placeholder="예) 홍길동"
            error={!isValid.name && Boolean(errorMessages.name)}
            errorMessage={errorMessages.name}
            onChange={({ value }) => handleChange('name')(value)}
            ref={nameRef}
            onKeyDown={(e) => handleKeyDown(e, telRef)}
          />

          {renderLabel('휴대폰 번호')}
          <AuthInput
            placeholder="휴대폰 번호를 입력해주세요"
            value={form.tel}
            error={!isValid.tel && Boolean(errorMessages.tel)}
            errorMessage={errorMessages.tel}
            onChange={({ value }) => handleChange('tel')(value)}
            isTel={true}
            ref={telRef}
            onKeyDown={(e) => handleKeyDown(e, interestRef)}
          />

          {renderLabel('관심 스타트업 분야')}
          <DropUp onChange={(value) => handleChange('interestStartups')(value)} />
          {errorMessages.interestStartups && (
            <ErrorMessage>{errorMessages.interestStartups}</ErrorMessage>
          )}
        </FormContainer>
      </div>

      {isPopupOpen && (
        <TosPopUp
          signupForm={form}
          onClose={() => setIsPopupOpen(false)}
          isMarketingChecked={isMarketingChecked}
          setIsMarketingChecked={setIsMarketingChecked}
        />
      )}

      <SubmitBtn
        type="next"
        isActive={isValid.password && isValid.passwordConfirm && isValid.tel}
        onClick={onClickNextBtn}
      />
    </>
  );
};

const FormContainer = styled.div`
  width: 320px;
  margin-top: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: var(--label-text-color);
  margin-top: 16px;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.span`
  color: var(--error-color);
  font-size: 12px;
  margin-top: 8px;
`;

export default SignUpForm;
