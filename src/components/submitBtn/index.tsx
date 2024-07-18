import { GoToSignUpBtnStyle, SubmitBtnStyle } from './styles';
import { useNavigate } from 'react-router-dom';

type Props = {
  type: `login` | `signup` | `next`;
  isActive: boolean;
  onClick: () => void;
};

export const SubmitBtn = ({ type, isActive, onClick }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isActive) {
      onClick();
      if (type === 'login') {
        navigate('/login');
      }
    }
  };

  const text = {
    login: `로그인`,
    signup: `회원가입`,
    next: `다음`,
  }[type];

  return (
    <SubmitBtnStyle
      location={type}
      onClick={handleClick}
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
  const navigate = useNavigate();

  const handleGoToSignUp = () => {
    navigate('/signup');
  };

  return <GoToSignUpBtnStyle onClick={handleGoToSignUp}>회원가입 하기</GoToSignUpBtnStyle>;
};
