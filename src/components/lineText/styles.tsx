import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextWrapper = styled.span<{ textLine: boolean }>`
  font-size: 12px;
  color: var(--inactive-text-color);
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  color: var(--focus-border-color);
  cursor: pointer;
  text-decoration: none;
  border-bottom: 1px solid var(--focus-border-color);

  &:hover {
    text-decoration: underline;
  }
`;
