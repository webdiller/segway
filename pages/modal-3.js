import ModelLayout from "@/layouts/ModelLayout";
import DiscountModal from "@/modals/DiscountModal";
import {data} from '@/base/data';

export default function Modal3({allData}) {
  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="segway index">
        {/* <DiscountModal /> */}
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