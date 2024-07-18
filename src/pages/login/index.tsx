import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/textInput';
import Header from '../../components/header';
import LineText from '../../components/lineText';
import {
  Container,
  ErrorMessage,
  Divider,
  TextInputWrapper,
  SubmitBtnWrapper,
  SignUpBtnWrapper,
} from './styles';
import { GoToSignUpBtn, SubmitBtn } from '../../components/submitBtn';
import axios from 'axios';
import { TitleStyle } from '../../components/title/styles';

type LoginPayload = {
  email: string; // 회원가입한 이메일
  password: string; // 회원가입한 비밀번호
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      alert('이미 로그인 되어있습니다');
      navigate('/startupList');
      return;
    }

    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    setIsButtonDisabled(!emailValid || !passwordValid);
  }, [email, password]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email) && email.length <= 50;
    setEmailError(isValid ? '' : '이메일 형식이 올바르지 않습니다');
    return isValid;
  };

  const validatePassword = (password: string) => {
    const isValid = password.length >= 8 && password.length <= 15;
    setPasswordError(isValid ? '' : '비밀번호는 8자리 이상 15자리 이하입니다');
    return isValid;
  };

  const handleEmailChange = ({ value }: { value: string }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ value }: { value: string }) => {
    setPassword(value);
  };

  const handleLogin = async () => {
    const payload: LoginPayload = {
      email,
      password,
    };

    try {
      const response = await axios.post('api/login', payload);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/startupList');
      }
    } catch (error) {
      if ((error as any).response.status === 400) {
        alert('아이디/비밀번호를 확인해주세요');
      }
    }
  };

  return (
    <>
      <Header isLoggedIn={false} currentPath={'/login'} />
      <Container>
        <TitleStyle>로그인</TitleStyle>

        <TextInputWrapper>
          <TextInput
            ref={emailRef}
            placeholder="이메일 계정을 입력해주세요"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setEmailError('')}
          />
          {email && emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </TextInputWrapper>

        <TextInputWrapper>
          <TextInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setPasswordError('')}
          />
          {password && passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </TextInputWrapper>

        <SubmitBtnWrapper>
          <SubmitBtn type="login" isActive={!isButtonDisabled} onClick={handleLogin} />
        </SubmitBtnWrapper>

        <Divider />

        <LineText text={'아직 회원이 아니신가요?'} textLine={false} />

        <SignUpBtnWrapper>
          <GoToSignUpBtn />
        </SignUpBtnWrapper>
      </Container>
    </>
  );
};

export default LoginScreen;
