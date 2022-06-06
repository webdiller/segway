import CustomHead from '@/basic/CustomHead';
import Wholesale from '@/sections/Wholesale';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function WholesalePage({ allData }) {
  return (
    <>
      <CustomHead title="Wholesale" />
      <Wholesale />
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
