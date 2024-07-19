import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  :root {
    --error-color: #F00001;
    --default-border-color: #D1D1D1;
    --focus-border-color: #006EFF;
    --medium-password-color: #F09A00;

    --placeholder-color: #b3b3b3;
    --input-text-color: #616161;

    --active-button-color: #006eff;
    --inactive-button-color: #B8D7FF;

    --default-text-color: #222222;
    --Divider-color: #E1E1E1;
    
    --title-text-color: #222222;
    --label-text-color: #424242;

    --hr-color: #D6DAE0;

    --tag-text-color: #338BFF;
    --tag-label-color: #F0F6FF;

    --card-tag-color: #262626;
    --card-content-color: #595959;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after {
    content: '';
    content: none;
  }
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
