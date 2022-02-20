import ModelLayout from "@/layouts/ModelLayout";
import { RemainTimeModalWithTimer } from "@/modals/RemainTimeModal";
import {data} from '@/base/data';

export default function Modal4({allData}) {
  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="segway index">
        {/* <RemainTimeModalWithTimer /> */}
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