import styled from 'styled-components';
import { useState } from 'react';
import AuthInput from '../authInput';
import { SubmitBtn } from '../submitBtn';
import TosPopUp from '../tosPopUp';
import { ValidateInput } from '../../utils/validateInput';

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phoneNumber: '',
    interested: [] as string[],
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phoneNumber: '',
    interested: '',
  });

  const [isValid, setIsValid] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMarketingChecked, setIsMarketingChecked] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const handleChange = (field: string) => (value: string | string[]) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));

    let error = '';
    switch (field) {
      case 'password':
        error = ValidateInput({ type: 'password', value: value as string });
        setIsPasswordValid(error === '비밀번호 안전도 높음');
        break;
      case 'passwordConfirm':
        if (value !== '') {
          error = ValidateInput({
            type: 'passwordConfirm',
            value: { password: form.password, passwordConfirm: value as string },
          });
          setIsPasswordConfirmValid(error === '');
        }
        break;
      case 'phoneNumber':
        error = ValidateInput({ type: 'phoneNumber', value: value as string });
        setIsPhoneNumberValid(error === '');
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));

    setIsValid(
      isPasswordValid &&
        isPasswordConfirmValid &&
        isPhoneNumberValid &&
        form.email.trim() !== '' &&
        form.name.trim() !== '' &&
        form.interested.length > 0,
    );
  };

  const onClickNextBtn = () => {
    const emailError = ValidateInput({ type: 'email', value: form.email });
    const nameError = ValidateInput({ type: 'name', value: form.name });
    const interestedError =
      form.interested.length === 0 ? '관심 스타트업 분야를 선택해주세요.' : '';

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: emailError,
      name: nameError,
      interested: interestedError,
    }));

    if (!emailError && !nameError && !interestedError) {
      setIsPopupOpen(true);
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
      <FormContainer>
        {renderLabel('이메일 (아이디)')}
        <AuthInput
          className="email"
          placeholder="이메일을 입력해주세요"
          value={form.email}
          error={errors.email !== ''}
          errorMessage={errors.email}
          onChange={({ value }) => handleChange('email')(value)}
        />

        {renderLabel('비밀번호')}
        <AuthInput
          placeholder="비밀번호를 입력해주세요 (8자리 이상)"
          error={errors.password !== '' && errors.password !== '비밀번호 안전도 높음'}
          errorMessage={errors.password}
          onChange={({ value }) => {
            handleChange('password')(value);
            handleChange('passwordConfirm')(form.passwordConfirm);
          }}
        />
        <div style={{ height: '5px' }} />
        <AuthInput
          placeholder="다시 한 번 비밀번호를 입력해주세요"
          error={errors.passwordConfirm !== ''}
          errorMessage={errors.passwordConfirm}
          onChange={({ value }) => handleChange('passwordConfirm')(value)}
        />

        {renderLabel('이름')}
        <AuthInput
          placeholder="예) 홍길동"
          error={errors.name !== ''}
          errorMessage={errors.name}
          onChange={({ value }) => handleChange('name')(value)}
        />

        {renderLabel('휴대폰 번호')}
        <AuthInput
          placeholder="휴대폰 번호를 입력해주세요"
          value={form.phoneNumber}
          error={errors.phoneNumber !== ''}
          errorMessage={errors.phoneNumber}
          onChange={({ value }) => handleChange('phoneNumber')(value)}
          isPhoneNumber={true}
        />

        {renderLabel('관심 스타트업 분야')}
        <AuthInput
          placeholder="선택해주세요"
          error={errors.interested !== ''}
          errorMessage={errors.interested}
          onChange={({ value }) => handleChange('interested')(value)}
        />
        {/* TODO: 스타트업 드롭다운 */}
      </FormContainer>

      {isPopupOpen && (
        <TosPopUp
          onClose={() => setIsPopupOpen(false)}
          isMarketingChecked={isMarketingChecked}
          setIsMarketingChecked={setIsMarketingChecked}
        />
      )}
      <SubmitBtn type="next" isActive={isValid} onClick={onClickNextBtn} />
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

export default SignUpForm;
