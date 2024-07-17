import React from 'react';
import ReactDOM from 'react-dom/client';
import normalize from 'emotion-normalize';
import { Global } from '@emotion/react';
import GlobalStyles from './globalStyles';
import { reset } from './styles/reset';

//
import App from './App';
import initializeMockupWorker from '@/__mock__';

initializeMockupWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Global styles={reset} />
      <GlobalStyles />
      <App />
    </React.StrictMode>,
  );
});
