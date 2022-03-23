import Image from 'next/image';
import PaymentBreadcrumbs from './PaymentBreadcrumbs';
import UserCartStatus from './UserCartStatus';

export default function MainLayout({ children }) {
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
          <UserCartStatus />
        </div>
      </div>
    </div>
  );
}
