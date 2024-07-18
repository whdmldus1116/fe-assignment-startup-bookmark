import styled from 'styled-components';
import LineText from '../components/lineText';
import { TitleStyle } from '../components/title/styles';
import SignUpForm from '../components/signUpForm';

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <TitleStyle>회원가입</TitleStyle>
      <LineText text="이미 계정이 있으신가요?" textLine={true} />

      <SignUpForm />
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 105px;
  align-items: center;
`;

export default SignUpPage;
