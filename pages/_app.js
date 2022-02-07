import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import {CartProvider} from 'react-use-cart';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../store/store';

import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Provider store={store}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
