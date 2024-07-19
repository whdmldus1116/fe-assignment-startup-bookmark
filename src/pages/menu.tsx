import Header from '../components/header';
import { TitleStyle } from '../components/title/styles';
import styled from 'styled-components';

const MenuScreen = () => {
  const isMobile = window.innerWidth < 768;
  const menuItems = [
    { name: '홈', link: '/startupList' },
    { name: '북마크', link: '/bookMark' },
  ];

  return (
    <>
      <Header isMobile={isMobile} isLoggedIn={true} currentPath="/menu" username={'꿍꿍꿍'} />
      <MenuContainer>
        {!isMobile && (
          <>
            <TitleStyle>메뉴</TitleStyle>
            <hr style={{ width: '100%', borderBottom: '1px solid #e8ecf2' }} />
          </>
        )}
        {menuItems.map((item, index) => (
          <Item key={index} href={item.link}>
            <span>{item.name}</span>
          </Item>
        ))}
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 105px;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Item = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 128px;
  border-bottom: 1px solid #e8ecf2;
  cursor: pointer;

  span {
    font-size: 20px;
    font-weight: medium;
    line-height: 28px;
    color: #989898;

    &:hover {
      color: #222222;
    }
  }
`;

export default MenuScreen;
