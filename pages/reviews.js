import CustomHead from '@/basic/CustomHead';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');
import ReviewsBlock from '@/sections/Reviews/ReviewsBlock';

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ReviewsPage({ allData }) {
  return (
    <>
      <CustomHead title="reviews" />
      <ReviewsBlock />
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
