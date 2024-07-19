import {
  HeaderActionButton,
  Divider,
  DesktopHeaderContainer,
  UserName,
  ProfileIcon,
  MenuIcon,
  CloseIcon,
  MobileText,
  MobileTitle,
  MobileHeaderContainer,
  UserProfile,
} from './styles';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';
import { useNavigate } from 'react-router-dom';

type Props = {
  isMobile: boolean;
  isLoggedIn: boolean;
  currentPath: string;
  username?: string;
};

const Header = ({ isMobile, isLoggedIn, currentPath, username }: Props) => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    window.history.back();
  };

  const renderLoggedInContent = () => (
    <>
      <UserProfile>
        <ProfileIcon>{username?.slice(0, 1)}</ProfileIcon>
        <UserName>{username}</UserName>
      </UserProfile>
      <MenuIcon src={menuIcon} alt="menu icon" onClick={() => navigate('/menu')} />
    </>
  );

  const renderLoggedOutContent = () => (
    <>
      <HeaderActionButton onClick={() => navigate('/login')} active={currentPath === '/login'}>
        로그인
      </HeaderActionButton>
      <Divider>|</Divider>
      <HeaderActionButton onClick={() => navigate('/signup')} active={currentPath === '/signup'}>
        회원가입
      </HeaderActionButton>
    </>
  );

  const renderMobileHeader = () => {
    const title = {
      '/menu': `메뉴`,
      '/startupList': `스타트업 리스트`,
      '/bookMark': `북마크`,
    }[currentPath];

    return (
      <MobileHeaderContainer>
        {isLoggedIn ? (
          <>
            <MobileTitle>{title}</MobileTitle>
            {currentPath === '/menu' ? (
              <CloseIcon src={closeIcon} alt="close icon" onClick={navigateToBack} />
            ) : (
              <MenuIcon src={menuIcon} alt="menu icon" onClick={() => navigate('/menu')} />
            )}
          </>
        ) : (
          <MobileText>로그인해주세요.</MobileText>
        )}
      </MobileHeaderContainer>
    );
  };

  const renderDesktopHeader = () => (
    <DesktopHeaderContainer path={currentPath}>
      {isLoggedIn ? (
        currentPath === '/menu' ? (
          <CloseIcon src={closeIcon} alt="close icon" onClick={navigateToBack} />
        ) : (
          renderLoggedInContent()
        )
      ) : (
        renderLoggedOutContent()
      )}
    </DesktopHeaderContainer>
  );

  return isMobile ? renderMobileHeader() : renderDesktopHeader();
};

export default Header;
