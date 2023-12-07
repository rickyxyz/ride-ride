import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Header from './components/Header.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <Header />
        <App />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);
