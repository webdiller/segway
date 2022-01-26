import DefaultLayout from "@/basic/DefaultLayout";
import { RemainTimeModalWithoutTimer } from "@/modals/RemainTimeModal";
import {data} from '@/base/data';

export default function Modal5({allData}) {
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="segway index">
        {/* <RemainTimeModalWithoutTimer /> */}
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