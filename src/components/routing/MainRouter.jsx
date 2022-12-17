import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import FullOverlaySplashScreen from 'components/common/loaders/FullOverlaySplashScreen';

import { SortByProvider } from 'context/SortBy';

import { appSettings } from 'utils/constants/appSettings';

const { MODULE_LAZY_IMPORT_DELAY } = appSettings;

const HomePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/home/homePage/HomePage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});
const CartPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/cart/cartPage/CartPage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});

const FavoritesPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/favorites/favoritesPage/FavoritesPage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});

const ContactMePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/contactMe/contactMePage/ContactMePage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});

const AppInfoPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/appInfo/appInfoPage/AppInfoPage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});

const AboutMePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/aboutMe/aboutMePage/AboutMePage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});

const ShopPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/shop/shopPage/ShopPage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});

const NotFoundPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(import('views/errors/notFoundPage/NotFoundPage')),
      MODULE_LAZY_IMPORT_DELAY
    );
  });
});

function MainRouter() {
  return (
    <Suspense fallback={<FullOverlaySplashScreen />}>
      <Routes>
        <Route path='*' element={<Navigate to={'./not-found'} />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/contact-me' element={<ContactMePage />} />
        <Route path='/app-info' element={<AppInfoPage />} />
        <Route path='/about-me' element={<AboutMePage />} />
        <Route
          path='/shop'
          element={
            <SortByProvider>
              <ShopPage />
            </SortByProvider>
          }
        />
        <Route path='/not-found' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default MainRouter;
