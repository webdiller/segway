import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { StrictMode } from 'react';
import ModelLayout from './../components/layouts/ModelLayout';
import PaymentLayout from './../components/layouts/PaymentLayout';
import MainPageLayout from '@/layouts/MainPageLayout';

import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function MyApp({ Component, pageProps, router }) {
  let conditionForModelLayout =
    router.pathname.startsWith('/kickscooters/kickscooter') ||
    router.pathname.startsWith('/gocarts/gocart') ||
    router.pathname.startsWith('/shipping-and-payment') ||
    router.pathname.startsWith('/contacts') ||
    router.pathname.startsWith('/wholesale') ||
    router.pathname.startsWith('/accessories') ||
    router.pathname.startsWith('/blog') ||
    router.pathname.startsWith('/reviews');

  let conditionForMainPageLayout = router.route === '/kickscooters' || router.route === '/' || router.route === '/gocarts';
  let conditionForPaymentLayout = router.pathname.startsWith('/payment');

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
            <Elements stripe={stripePromise}>
              <PaymentLayout {...pageProps}>
                <Component {...pageProps} />
              </PaymentLayout>
            </Elements>
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
