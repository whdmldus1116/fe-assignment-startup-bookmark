import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #b3b3b3;
`;

export const HeaderActionButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

export const Divider = styled.span`
  color: #616161;
  margin: 0 10px;
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
  font-weight: bold;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-size: 12px;
  color: #616161;
  margin-right: 20px;
`;

export const MenuIcon = styled.img`
  margin-left: 15px;
  cursor: pointer;
`;
