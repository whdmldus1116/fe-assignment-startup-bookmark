import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid var(--placeholder-color);
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
  margin-left: 15px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
