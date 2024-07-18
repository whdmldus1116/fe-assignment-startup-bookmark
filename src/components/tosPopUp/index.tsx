import {
  BlueText,
  CheckboxContainer,
  CheckboxLabel,
  CloseIcon,
  InfoText,
  PopupContainer,
  PopupContent,
  PopupHeader,
  PopupTitle,
} from './styles';
import closeIcon from '../../assets/close.png';
import { useEffect, useState } from 'react';
import { SubmitBtn } from '../submitBtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type Props = {
  signupForm: {
    email: string;
    password: string;
    passwordConfirm: string;
    name: string;
    tel: string;
    interestStartups: string[];
  };
  onClose: () => void;
  isMarketingChecked: boolean;
  setIsMarketingChecked: (checked: boolean) => void;
};

type SignupPayload = {
  email: string; // 이메일 주소
  password: string; // 비밀번호
  name: string; // 이름
  tel: string; // 전화번호
  interestStartups: string[]; // 관심 스타트업 분야
  marketingAgreed: boolean; // 마케팅 활용 동의
};

const TosPopUp = ({ signupForm, onClose, isMarketingChecked, setIsMarketingChecked }: Props) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isServiceChecked, setIsServiceChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckAll = () => {
    setIsAllChecked(!isAllChecked);
    setIsServiceChecked(!isAllChecked);
    setIsPrivacyChecked(!isAllChecked);
    setIsMarketingChecked(!isAllChecked);
  };

  const validateCheckbox = () => {
    if (!isServiceChecked || !isPrivacyChecked) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const payload: SignupPayload = {
      ...signupForm,
      marketingAgreed: isMarketingChecked,
    };

    try {
      const response = await axios.post('/api/signup', payload);
      if (response.status === 201) {
        onClose();
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isServiceChecked && isPrivacyChecked && isMarketingChecked) {
      setIsAllChecked(true);
    }
  }, [isServiceChecked, isPrivacyChecked, isMarketingChecked]);

  return (
    <PopupContainer>
      <PopupHeader>
        <CloseIcon src={closeIcon} alt="close icon" onClick={onClose} />
      </PopupHeader>
      <PopupTitle>
        <span>약관동의</span>
        <span style={{ color: 'var(--error-color)' }}>*</span>
      </PopupTitle>
      <PopupContent>
        <CheckboxContainer>
          <input type="checkbox" checked={isAllChecked} onChange={handleCheckAll} />
          <CheckboxLabel>모두 동의합니다.</CheckboxLabel>
        </CheckboxContainer>
        <hr style={{ width: '100%', color: 'var(--hr-color)' }} />
        <CheckboxContainer>
          <input
            type="checkbox"
            checked={isServiceChecked}
            onChange={() => {
              setIsServiceChecked(!isServiceChecked);
            }}
          />
          <CheckboxLabel>
            [필수] <BlueText>서비스 이용 약관</BlueText>에 동의합니다.
          </CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer>
          <input
            type="checkbox"
            checked={isPrivacyChecked}
            onChange={() => {
              setIsPrivacyChecked(!isPrivacyChecked);
            }}
          />
          <CheckboxLabel>
            [필수] <BlueText>개인정보수집 및 이용</BlueText>에 동의합니다.
          </CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer>
          <input
            type="checkbox"
            checked={isMarketingChecked}
            onChange={() => {
              setIsMarketingChecked(!isMarketingChecked);
            }}
          />
          <CheckboxLabel>
            [선택] <BlueText>마케팅 활용 동의</BlueText> 및 광고 수신에 <br /> 동의합니다.
          </CheckboxLabel>
        </CheckboxContainer>
        <InfoText>
          스타트업과 투자 생태계의 인사이트가 담긴 뉴스레터, <br /> 데모데이 및 행사/이벤트 등
          다양한 정보를 제공합니다.
        </InfoText>
      </PopupContent>
      <SubmitBtn type="signup" isActive={validateCheckbox()} onClick={handleSubmit} />
    </PopupContainer>
  );
};

export default TosPopUp;
