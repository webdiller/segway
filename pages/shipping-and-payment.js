import CustomHead from '@/basic/CustomHead';
import {data} from '@/base/data';
import ShippingAndPayment from '@/sections/ShippingAndPayment';

export default function PaymentMainPage({allData}) {
  return (
    <>
      <CustomHead title="Shipping and payment" />
      <ShippingAndPayment />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
