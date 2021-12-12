import DefaultLayout from "@/basic/DefaultLayout";
import DiscountModal from "@/modals/DiscountModal";
import {data} from '@/base/data';

export default function Modal3({allData}) {
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="segway index">
        <DiscountModal />
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