import dynamic from 'next/dynamic';
import CustomHead from '@/basic/CustomHead';
import {data} from '@/base/data';
const ReviewsBlockDinamic = dynamic(() => import('@/sections/Reviews/ReviewsBlock'));

export default function Reviews({allData}) {
  return (
    <div>
      <CustomHead title="reviews"/>
      <ReviewsBlockDinamic />
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
