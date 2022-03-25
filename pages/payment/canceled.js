import { data } from '@/base/data';

import CustomHead from '@/basic/CustomHead';

export default function PaymentCanceledPage() {

  return (
    <>
      <CustomHead title="Payment canceled page" />
      <div className="payment-info">
        <div className="payment-info__shipping-address">
          <h1>Canceled</h1>
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