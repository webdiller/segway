import dynamic from 'next/dynamic';
import ModelLayout from '@/layouts/ModelLayout';
const ReviewsBlockDinamic = dynamic(() => import('@/sections/Reviews/ReviewsBlock'));

import {data} from '@/base/data';

export default function Reviews({allData}) {
  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="segway reviews">
        <ReviewsBlockDinamic />
      </ModelLayout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
