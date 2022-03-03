import CustomHead from '@/basic/CustomHead';
import {data} from '@/base/data';
import ReviewsBlock from '@/sections/Reviews/ReviewsBlock';

export default function ReviewsPage({allData}) {
  return (
    <div>
      <CustomHead title="reviews" />
      <ReviewsBlock />
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
