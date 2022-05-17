import CustomHead from '@/basic/CustomHead';
import {data} from '@/base/data-test';
import ShippingAndPayment from '@/sections/ShippingAndPayment';

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ShippingAndPaymentPage({allData}) {
  return (
    <>
      <CustomHead title="Shipping and payment" />
      <ShippingAndPayment />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
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
