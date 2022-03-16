import CustomHead from '@/basic/CustomHead';
import { data } from '@/base/data';
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
