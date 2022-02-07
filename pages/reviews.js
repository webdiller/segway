import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';
const ReviewsBlockDinamic = dynamic(() => import('@/sections/Reviews/ReviewsBlock'));

import {data} from '@/base/data';

export default function Reviews({allData}) {
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="segway reviews">
        <ReviewsBlockDinamic />
      </DefaultLayout>
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
