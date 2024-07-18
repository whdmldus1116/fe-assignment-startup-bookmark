import styled from 'styled-components';

export const HeaderContainer = styled.header<{ path: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: ${({ path }) =>
    path === '/menu' ? 'none' : '1px solid var(--placeholder-color)'};
`;

export const HeaderActionButton = styled.button<{ active: boolean }>`
  color: ${({ active }) => (active ? 'var(--active-button-color)' : 'var(--input-text-color)')};

  background: none;
  border: none;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

export const Divider = styled.span`
  color: var(--placeholder-color);
  margin: 0 10px;
  cursor: default;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 50px;
`;

export const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #6d7992;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-right: 7px;
`;

export const UserName = styled.span`
  font-size: 12px;
  color: var(--input-text-color);
  margin-right: 20px;
`;

export const MenuIcon = styled.img`
  height: 20px;
  width: 20px;
  position: absolute;
  margin-left: 15px;
  cursor: pointer;
  right: 20px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const MobileHeaderContainer = styled(HeaderContainer)`
  height: 50px;
`;

export const MobileTitle = styled.h1`
  font-size: 20px;
  color: var(--default-text-color);
`;

export const MobileText = styled.span`
  font-size: 14px;
  color: var(--input-text-color);
`;
