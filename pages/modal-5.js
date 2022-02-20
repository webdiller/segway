import ModelLayout from "@/layouts/ModelLayout";
import { RemainTimeModalWithoutTimer } from "@/modals/RemainTimeModal";
import {data} from '@/base/data';

export default function Modal5({allData}) {
  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="segway index">
        {/* <RemainTimeModalWithoutTimer /> */}
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