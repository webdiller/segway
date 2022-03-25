import { data } from '@/base/data';

import CustomHead from '@/basic/CustomHead';

export default function PaymentSuccessPage() {

  return (
    <>
      <CustomHead title="Payment success page" />
      <div className="payment-info">
        <div className="payment-info__shipping-address">
          <h1>Success</h1>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      accessoeries: data.accessoeries
    }
  };
}