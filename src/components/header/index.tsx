import {
  HeaderActionButton,
  Divider,
  HeaderContainer,
  UserName,
  ProfileIcon,
  MenuIcon,
  CloseIcon,
} from './styles';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';

type Props = {
  isLoggedIn: boolean;
  currentPath: string;
  username?: string;
};

const Header = ({ isLoggedIn, currentPath, username }: Props) => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const navigateToBack = () => {
    window.history.back();
  };

  return (
    <HeaderContainer>
      {isLoggedIn ? (
        currentPath === '/menu' ? (
          <CloseIcon src={closeIcon} alt="close icon" onClick={navigateToBack} />
        ) : (
          <>
            <ProfileIcon>{username?.slice(0, 1)}</ProfileIcon>
            <UserName>{username}</UserName>
            <MenuIcon src={menuIcon} alt="menu icon" onClick={() => handleNavigation('/menu')} />
          </>
        )
      ) : (
        <>
          <HeaderActionButton
            onClick={() => handleNavigation('/login')}
            active={currentPath === '/login'}
          >
            로그인
          </HeaderActionButton>
          <Divider>|</Divider>
          <HeaderActionButton
            onClick={() => handleNavigation('/signup')}
            active={currentPath === '/signup'}
          >
            회원가입
          </HeaderActionButton>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
