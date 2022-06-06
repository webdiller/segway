import dynamic from 'next/dynamic';
import CustomHead from '@/basic/CustomHead';
import Footer from '@/sections/Footer';
import { PaymentBreadcrumbs } from '@/sections/Payment';
import MainLayout from '@/sections/Payment/MainLayout';
import PaymentTopNavigation from '@/sections/PaymentTopNavigation';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const PreorderModalDynamic = dynamic(() => import('@/modals/PreorderModal'));

let stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function PaymentLayout({ title = 'Segway', description = 'Описание', children, accessoeries }) {
  return (
    <>
      <CustomHead description={description} title={title} />
      <div className="payment-layout__page">
        <PaymentTopNavigation />
        <MainLayout accessoeries={accessoeries}>
          <div className="show-block-991">
            <PaymentBreadcrumbs />
          </div>
          <Elements options={{
            fonts: [
              {
                cssSrc: 'https://fonts.cdnfonts.com/css/proxima-nova-2',
                family: 'Proxima Nova',
                style: 'normal',
                weight: '400'
              }
            ],
            appearance: {
              theme: 'stripe'
            }
          }}
            stripe={stripePromise}>
            {children}
          </Elements>
        </MainLayout>
        <Footer />
      </div>
      <PreorderModalDynamic />
    </>
  );
}
