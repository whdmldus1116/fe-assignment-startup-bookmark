import {
  HeaderActionButton,
  Divider,
  HeaderContainer,
  UserName,
  ProfileIcon,
  MenuIcon,
} from './styles';
import menuImg from '@/assets/menu.png';

type Props = {
  isLoggedIn: boolean;
  username?: string;
};

const Header = ({ isLoggedIn, username }: Props) => {
  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleSignup = () => {
    window.location.href = '/signup';
  };

  return (
    <HeaderContainer>
      {isLoggedIn ? (
        <>
          <ProfileIcon>{username?.slice(0, 1)}</ProfileIcon>
          <UserName>{username}</UserName>
          <MenuIcon src={menuImg} alt="menu icon" />
        </>
      ) : (
        <>
          <HeaderActionButton
            onClick={handleLogin}
            style={{ color: window.location.pathname === '/login' ? '#006eff' : '#616161' }}
          >
            로그인
          </HeaderActionButton>
          <Divider>|</Divider>
          <HeaderActionButton
            onClick={handleSignup}
            style={{ color: window.location.pathname === '/signup' ? '#006eff' : '#616161' }}
          >
            회원가입
          </HeaderActionButton>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
