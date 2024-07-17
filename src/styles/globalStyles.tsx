import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --error-color: #F00001;
    --default-border-color: #D1D1D1;
    --focus-border-color: #006EFF;

    --placeholder-color: #b3b3b3;
    --input-text-color: #616161;

    --active-button-color: #006eff;
    --inactive-button-color: #B8D7FF;

    --default-text-color: #222222;
    --Divider-color: #E1E1E1;
  }
`;

export default GlobalStyles;
