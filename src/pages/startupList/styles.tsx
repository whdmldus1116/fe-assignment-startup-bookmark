import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0 100px;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 100px 0 76px 0;
  font-size: 30px;
  font-weight: bold;
`;

export const CardGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
  row-gap: 60px;
  column-gap: 20px;

  @media (max-width: 768px) {
    margin-top: 24px;
    row-gap: 20px;
  }
`;
