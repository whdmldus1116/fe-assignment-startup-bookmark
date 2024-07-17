import React from 'react';
import ReactDOM from 'react-dom/client';
import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
import GlobalStyles from './globalStyles';

//
import App from './App';
import initializeMockupWorker from '@/__mock__';

initializeMockupWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>,
  );
});
