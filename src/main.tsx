import React, { ReactNode, Suspense } from 'react';
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

// eslint-disable-next-line react-refresh/only-export-components
const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <PageHome />
      </Layout>
    ),
  },
  {
    path: '/bike',
    element: (
      <Layout>
        <PageBikes />
      </Layout>
    ),
  },
  {
    path: '/bike/:id',
    element: (
      <Layout>
        <PageBike />
      </Layout>
    ),
  },
  {
    path: '/tour',
    element: (
      <Layout>
        <PageTours />
      </Layout>
    ),
  },
  {
    path: '/tour/:id',
    element: (
      <Layout>
        <PageBookTour />
      </Layout>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Layout>
        <PageCheckout />
      </Layout>
    ),
  },
  {
    path: '/order',
    element: (
      <Layout>
        <PageOrder />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <PageAbout />
      </Layout>
    ),
  },
  {
    path: '/stores',
    element: (
      <Layout>
        <PageStores />
      </Layout>
    ),
  },
  {
    path: '/summary',
    element: (
      <Layout>
        <PageSummary />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);
