import axios from 'axios';

type Props = {
  type: string;
  value: string | { password: string; passwordConfirm: string };
};

type CheckTelPayload = {
  tel: string;
};

export const ValidateInput = ({ type, value }: Props) => {
  switch (type) {
    case 'email':
      return validateEmail(value as string);
    case 'password':
      return validatePassword(value as string);
    case 'passwordConfirm':
      return validatePasswordConfirm(value as { password: string; passwordConfirm: string });
    case 'name':
      return validateName(value as string);
    default:
      return '';
  }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z가-힣\s]{1,15}$/;
const phoneNumberRegex = /^01(0|1|[6-9])[0-9]{3,4}[0-9]{4}$/;

const validateEmail = (value: string) => {
  if (!emailRegex.test(value)) {
    return '잘못된 이메일 주소입니다.';
  }
  if (value.length > 50) {
    return '이메일은 최대 50자 이하입니다.';
  }
  return '';
};

const validatePassword = (password: string) => {
  if (password.length === 0) {
    return '';
  }
  if (password.length < 8 || password.length > 15) {
    return '비밀번호는 8자리 이상, 15자리 이하로 입력해주세요.';
  }
  if (/^[a-z]+$|^[A-Z]+$|^[0-9]+$|^[!@#$%^&*]+$/.test(password)) {
    return '비밀번호 안전도 낮음';
  }
  if (
    /^[a-zA-Z]+$|^[a-z0-9]+$|^[a-z!@#$%^&*]+$|^[A-Z0-9]+$|^[A-Z!@#$%^&*]+$|^[0-9!@#$%^&*]+$/.test(
      password,
    )
  ) {
    return '비밀번호 안전도 보통';
  }
  return '비밀번호 안전도 높음';
};

const validatePasswordConfirm = ({
  password,
  passwordConfirm,
}: {
  password: string;
  passwordConfirm: string;
}) => {
  if (passwordConfirm !== password) {
    return '비밀번호가 일치하지 않습니다.';
  }
  return '';
};

const validateName = (value: string) => {
  if (!nameRegex.test(value)) {
    return '이름은 한글, 영어, 공백만 입력 가능합니다.';
  }
  if (value.trim() !== value) {
    return '이름의 앞 뒤에는 공백 문자가 위치할 수 없습니다.';
  }
  if (value.length < 1 || value.length > 15) {
    return '이름은 최소 1글자, 최대 15자 이하만 입력 가능합니다.';
  }
  return '';
};

export const validatePhoneNumber = async (phoneNumber: string): Promise<string> => {
  const phoneNumberWithoutHyphen = phoneNumber.replace(/-/g, '');
  if (!/^\d+$/.test(phoneNumberWithoutHyphen)) {
    return '숫자만 입력 가능합니다.';
  }

  if (!phoneNumberRegex.test(phoneNumberWithoutHyphen)) {
    return '잘못된 휴대폰 번호입니다.';
  }
  const payload: CheckTelPayload = { tel: phoneNumberWithoutHyphen };

  try {
    const response = await axios.post('/api/check-tel', payload);
    if (response.status === 400) {
      return '이미 등록된 휴대폰 번호입니다.';
    }
    return '';
  } catch (error) {
    console.error(error);
    return '오류가 발생했습니다. 다시 시도해주세요.';
  }
};
