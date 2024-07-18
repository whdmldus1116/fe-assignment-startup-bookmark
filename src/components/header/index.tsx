import {
  HeaderActionButton,
  Divider,
  HeaderContainer,
  UserName,
  ProfileIcon,
  MenuIcon,
  CloseIcon,
  MobileText,
} from './styles';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';

type Props = {
  isLoggedIn: boolean;
  currentPath: string;
  username?: string;
};

const Header = ({ isLoggedIn, currentPath, username }: Props) => {
  const isMobile = window.innerWidth < 768;

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const navigateToBack = () => {
    window.history.back();
  };

  const renderLoggedInContent = () => (
    <>
      <ProfileIcon>{username?.slice(0, 1)}</ProfileIcon>
      <UserName>{username}</UserName>
      <MenuIcon src={menuIcon} alt="menu icon" onClick={() => handleNavigation('/menu')} />
    </>
  );

  const renderLoggedOutContent = () => (
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
  );

  const renderMobileHeader = () => (
    <HeaderContainer>
      {isLoggedIn ? (
        currentPath === '/menu' ? (
          <CloseIcon src={closeIcon} alt="close icon" onClick={navigateToBack} />
        ) : (
          renderLoggedInContent()
        )
      ) : (
        <MobileText>로그인해주세요.</MobileText>
      )}
    </HeaderContainer>
  );

  const renderDesktopHeader = () => (
    <HeaderContainer>
      {isLoggedIn ? (
        currentPath === '/menu' ? (
          <CloseIcon src={closeIcon} alt="close icon" onClick={navigateToBack} />
        ) : (
          renderLoggedInContent()
        )
      ) : (
        renderLoggedOutContent()
      )}
    </HeaderContainer>
  );

  return isMobile ? renderMobileHeader() : renderDesktopHeader();
};

export default Header;
