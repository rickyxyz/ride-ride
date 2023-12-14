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
import PageTours from './pages/Tours.tsx';
import PageBike from './pages/BookBike.tsx';
import PageBookTour from './pages/BookTour.tsx';
import PageOrder from './pages/Order.tsx';
import PageCheckout from './pages/Checkout.tsx';
import PageAbout from './pages/About.tsx';
import PageStores from './pages/Stores.tsx';
import { CartContextProvider } from './components/useCart.tsx';
import PageSummary from './pages/Summary.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHome />,
  },
  {
    path: '/bike',
    element: <PageBikes />,
  },
  {
    path: '/bike/:id',
    element: <PageBike />,
  },
  {
    path: '/tour',
    element: <PageTours />,
  },
  {
    path: '/tour/:id',
    element: <PageBookTour />,
  },
  {
    path: '/checkout',
    element: <PageCheckout />,
  },
  {
    path: '/order',
    element: <PageOrder />,
  },
  {
    path: '/about',
    element: <PageAbout />,
  },
  {
    path: '/stores',
    element: <PageStores />,
  },
  {
    path: '/summary',
    element: <PageSummary />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <CartContextProvider>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </CartContextProvider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);
