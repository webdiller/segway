import CustomHead from '@/basic/CustomHead';
import Footer from '@/sections/Footer';
import {PaymentBreadcrumbs} from '@/sections/Payment';
import MainLayout from '@/sections/Payment/MainLayout';
import PaymentTopNavigation from '@/sections/PaymentTopNavigation';

export default function PaymentLayout({title = 'Segway', description = 'Описание', children, accessoeries}) {
  return (
    <>
      <CustomHead description={description} title={title} />
      <div className="payment-layout__page">
        <PaymentTopNavigation />
        <MainLayout accessoeries={accessoeries}>
          <div className="show-block-991">
            <PaymentBreadcrumbs />
          </div>
          {children}
        </MainLayout>
        <Footer />
      </div>
    </>
  );
}
