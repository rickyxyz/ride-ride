import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import PageHome from './pages/Home.tsx';
import Header from './components/Header.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer.tsx';
import PageBikes from './pages/Bikes.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHome />,
  },
  {
    path: '/bikes',
    element: <PageBikes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);
