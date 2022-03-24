import Products from '@/modals/ProductAddedModal/Products';
import ProductsSwiler from '@/modals/ProductAddedModal/ProductsSwiler';
import PaymentBreadcrumbs from './PaymentBreadcrumbs';
import UserCartStatus from './UserCartStatus';

export default function MainLayout({ children, accessoeries }) {
  return (
    <div className="payment-layout">
      <div className="container payment-layout__container">
        <div className="payment-layout__left">
          <div className="hide-991">
            <PaymentBreadcrumbs />
          </div>
          {children}
        </div>
        <div className="payment-layout__right">
          <Products />
          <ProductsSwiler customClasses={['for-payment-page']} accessoeries={accessoeries} />
          <UserCartStatus />
        </div>
      </div>
    </div>
  );
}
