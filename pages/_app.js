import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import {CartProvider} from 'react-use-cart';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../store/store';

import {StrictMode} from 'react';
import ModelLayout from './../components/layouts/ModelLayout';
import PaymentLayout from './../components/layouts/PaymentLayout';
import MainPageLayout from '@/layouts/MainPageLayout';

import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps, router}) {
  let conditionForModelLayout =
    router.pathname.startsWith('/kickscooters/kickscooter') ||
    router.pathname.startsWith('/gocarts/gocart') ||
    router.pathname.startsWith('/shipping-and-payment') ||
    router.pathname.startsWith('/contacts') ||
    router.pathname.startsWith('/wholesale') ||
    router.pathname.startsWith('/accessories') ||
    router.pathname.startsWith('/reviews');

  let conditionForMainPageLayout = router.route === '/kickscooters' || router.route === '/' || router.route === '/gocarts';
  let conditionForPaymentLayout = router.pathname.startsWith('/payment');

  if (conditionForModelLayout) {
    return (
      <StrictMode>
        <Provider store={store}>
          <CartProvider>
            <ModelLayout {...pageProps}>
              <Component {...pageProps} />
            </ModelLayout>
          </CartProvider>
        </Provider>
      </StrictMode>
    );
  } else if (conditionForMainPageLayout) {
    return (
      <StrictMode>
        <Provider store={store}>
          <CartProvider>
            <MainPageLayout>
              <Component {...pageProps} />
            </MainPageLayout>
          </CartProvider>
        </Provider>
      </StrictMode>
    );
  } else if (conditionForPaymentLayout) {
    return (
      <StrictMode>
        <Provider store={store}>
          <CartProvider>
            <PaymentLayout>
              <Component {...pageProps} />
            </PaymentLayout>
          </CartProvider>
        </Provider>
      </StrictMode>
    );
  } else {
    return (
      <StrictMode>
        <Provider store={store}>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </Provider>
      </StrictMode>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
