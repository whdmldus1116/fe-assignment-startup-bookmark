import Header from '../components/header';
import { TitleStyle } from '../components/title/styles';
import styled from 'styled-components';

const MenuPage = () => {
  const menuItems = [
    { name: '홈', link: '/startupList' },
    { name: '북마크', link: '/bookMark' },
  ];

  return (
    <>
      <Header isLoggedIn={true} currentPath="/menu" username={'꿍꿍꿍'} />
      <MenuContainer>
        <TitleStyle>메뉴</TitleStyle>
        <hr style={{ width: '100%', borderBottom: '1px solid #e8ecf2' }} />
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

export default MenuPage;
