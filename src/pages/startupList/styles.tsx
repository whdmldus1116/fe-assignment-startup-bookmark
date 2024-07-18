import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 100px 0 76px 0;
  font-size: 30px;
  font-weight: bold;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
  row-gap: 60px;
  column-gap: 20px;
`;
