import DiscountModal from '@/modals/DiscountModal';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function Modal3({allData}) {
  return (
    <div>
      <CustomHead />
      <DiscountModal />
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
