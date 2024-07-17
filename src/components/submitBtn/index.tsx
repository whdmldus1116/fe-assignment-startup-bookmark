import { GoToSignUpBtnStyle, SubmitBtnStyle } from './styles';

type Props = {
  type: `login` | `signup` | `next`;
  isActive: boolean;
  onClick: () => void;
};

export const SubmitBtn = ({ type, isActive, onClick }: Props) => {
  const text = {
    login: `로그인`,
    signup: `회원가입`,
    next: `다음`,
  }[type];

  return (
    <SubmitBtnStyle
      onClick={onClick}
      style={{
        backgroundColor: isActive ? '#006eff' : '#B8D7FF',
        cursor: isActive ? '' : 'default',
      }}
    >
      {text}
    </SubmitBtnStyle>
  );
};

export const GoToSignUpBtn = () => {
  const handleGoToSignUp = () => {
    window.location.href = '/signup';
  };

  return <GoToSignUpBtnStyle onClick={handleGoToSignUp}>회원가입 하기</GoToSignUpBtnStyle>;
};
