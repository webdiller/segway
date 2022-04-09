import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store';

import { StrictMode } from 'react';
import ModelLayout from './../components/layouts/ModelLayout';
import PaymentLayout from './../components/layouts/PaymentLayout';
import MainPageLayout from '@/layouts/MainPageLayout';

import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/index.scss';
import InfoPageLayout from '@/layouts/InfoPageLayout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {

  let conditionForModelLayout =
    router.pathname.startsWith('/kickscooters/kickscooter') ||
    router.pathname.startsWith('/gocarts/gocart') ||
    router.pathname.startsWith('/accessories') ||
    router.pathname.startsWith('/blog') ||
    router.pathname.startsWith('/reviews');

  let conditionForMainPageLayout = router.route === '/kickscooters' || router.route === '/' || router.route === '/gocarts';
  let conditionForPaymentLayout = router.pathname.startsWith('/payment');
  let conditionForInfoPageLayout = router.route === '/shipping-and-payment' || router.route === '/wholesale' || router.route === '/contacts'

  if (conditionForModelLayout) {
    return (
      <StrictMode>
        <Provider store={store}>
          <ModelLayout {...pageProps}>
            <Component {...pageProps} />
          </ModelLayout>
        </Provider>
      </StrictMode>
    );
  } else if (conditionForInfoPageLayout) {
    return (
      <StrictMode>
        <Provider store={store}>
          <InfoPageLayout {...pageProps}>
            <Component {...pageProps} />
          </InfoPageLayout>
        </Provider>
      </StrictMode>
    );
  } else if (conditionForMainPageLayout) {
    return (
      <StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainPageLayout {...pageProps}>
              <Component {...pageProps} />
            </MainPageLayout>
          </PersistGate>
        </Provider>
      </StrictMode>
    );
  } else if (conditionForPaymentLayout) {
    return (
      <StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PaymentLayout {...pageProps}>
              <Component {...pageProps} />
            </PaymentLayout>
          </PersistGate>
        </Provider>
      </StrictMode>
    );
  } else {
    return (
      <StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </StrictMode>
    );
  }
}

export default MyApp;
